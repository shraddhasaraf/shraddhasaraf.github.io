const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const { format, subDays } = require('date-fns');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

// Initialize the Analytics Data client
const analyticsDataClient = new BetaAnalyticsDataClient();

const propertyId = process.env.GA_PROPERTY_ID;
const outputDir = path.join(__dirname, '../reports');

async function runReport() {
  const today = new Date();
  const lastWeek = subDays(today, 7);
  
  try {
    // Ensure reports directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Basic metrics report
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: format(lastWeek, 'yyyy-MM-dd'),
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
      dimensions: [{ name: 'date' }],
    });

    // Section views report
    const [sectionResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: format(lastWeek, 'yyyy-MM-dd'),
          endDate: 'today',
        },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensions: [{ name: 'eventName' }, { name: 'section_name' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: {
            value: 'section_view',
          },
        },
      },
    });

    // User interaction report
    const [interactionResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: format(lastWeek, 'yyyy-MM-dd'),
          endDate: 'today',
        },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensions: [{ name: 'eventName' }, { name: 'label' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: {
            value: 'user_interaction',
          },
        },
      },
    });

    // Generate report
    const report = {
      generatedAt: new Date().toISOString(),
      period: {
        start: format(lastWeek, 'yyyy-MM-dd'),
        end: format(today, 'yyyy-MM-dd'),
      },
      overview: {
        totalPageViews: response.rows.reduce((sum, row) => sum + parseInt(row.metricValues[0].value), 0),
        totalActiveUsers: response.rows.reduce((sum, row) => sum + parseInt(row.metricValues[1].value), 0),
        averageSessionDuration: response.rows.reduce((sum, row) => sum + parseFloat(row.metricValues[2].value), 0) / response.rows.length,
        averageBounceRate: response.rows.reduce((sum, row) => sum + parseFloat(row.metricValues[3].value), 0) / response.rows.length,
      },
      dailyMetrics: response.rows.map(row => ({
        date: row.dimensionValues[0].value,
        pageViews: parseInt(row.metricValues[0].value),
        activeUsers: parseInt(row.metricValues[1].value),
        avgSessionDuration: parseFloat(row.metricValues[2].value),
        bounceRate: parseFloat(row.metricValues[3].value),
      })),
      popularSections: sectionResponse.rows.map(row => ({
        section: row.dimensionValues[1].value,
        views: parseInt(row.metricValues[0].value),
      })).sort((a, b) => b.views - a.views),
      userInteractions: interactionResponse.rows.map(row => ({
        label: row.dimensionValues[1].value,
        count: parseInt(row.metricValues[0].value),
      })).sort((a, b) => b.count - a.count),
    };

    // Save report
    const fileName = `analytics-report-${format(today, 'yyyy-MM-dd')}.json`;
    await fs.writeFile(
      path.join(outputDir, fileName),
      JSON.stringify(report, null, 2)
    );

    // Generate HTML report
    const htmlReport = generateHtmlReport(report);
    await fs.writeFile(
      path.join(outputDir, `analytics-report-${format(today, 'yyyy-MM-dd')}.html`),
      htmlReport
    );

    console.log(`Report generated successfully: ${fileName}`);
  } catch (error) {
    console.error('Error generating report:', error);
  }
}

function generateHtmlReport(report) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Analytics Report - ${format(new Date(report.period.end), 'PP')}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8">Portfolio Analytics Report</h1>
        
        <div class="bg-white rounded-lg shadow p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Overview</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="text-sm text-gray-600">Total Page Views</h3>
                    <p class="text-2xl font-bold text-blue-600">${report.overview.totalPageViews}</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                    <h3 class="text-sm text-gray-600">Active Users</h3>
                    <p class="text-2xl font-bold text-green-600">${report.overview.totalActiveUsers}</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <h3 class="text-sm text-gray-600">Avg Session (min)</h3>
                    <p class="text-2xl font-bold text-purple-600">${(report.overview.averageSessionDuration / 60).toFixed(2)}</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h3 class="text-sm text-gray-600">Bounce Rate</h3>
                    <p class="text-2xl font-bold text-yellow-600">${report.overview.averageBounceRate.toFixed(1)}%</p>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-4">Popular Sections</h2>
                <div class="space-y-4">
                    ${report.popularSections.map(section => `
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">${section.section}</span>
                            <span class="font-semibold">${section.views} views</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-4">Top User Interactions</h2>
                <div class="space-y-4">
                    ${report.userInteractions.map(interaction => `
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">${interaction.label}</span>
                            <span class="font-semibold">${interaction.count} clicks</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="mt-8 text-sm text-gray-500">
            Generated on ${format(new Date(report.generatedAt), 'PPpp')}
        </div>
    </div>
</body>
</html>
  `;
}

// Run the report
runReport();
