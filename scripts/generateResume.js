const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file
doc.pipe(fs.createWriteStream('../public/resume.pdf'));

// Set the title
doc.font('Helvetica-Bold').fontSize(24).text('Rushabh Thakkar', { align: 'center' });
doc.moveDown();

// Contact Information
doc.font('Helvetica').fontSize(12)
  .text('Email: contact@rushabhthakkar.com', { align: 'center' })
  .text('Phone: +1 (555) 123-4567', { align: 'center' })
  .text('Location: San Francisco, CA', { align: 'center' });
doc.moveDown();

// Professional Summary
doc.font('Helvetica-Bold').fontSize(16).text('Professional Summary');
doc.font('Helvetica').fontSize(12)
  .text('Full-stack developer specializing in building exceptional digital experiences. Focused on building accessible, human-centered products.');
doc.moveDown();

// Experience
doc.font('Helvetica-Bold').fontSize(16).text('Experience');

// Senior Software Engineer
doc.font('Helvetica-Bold').fontSize(14).text('Senior Software Engineer');
doc.font('Helvetica').fontSize(12)
  .text('Tech Solutions Inc. | 2022 - Present')
  .text('• Led development of enterprise-scale web applications using React and Node.js.');
doc.moveDown();

// Software Engineer
doc.font('Helvetica-Bold').fontSize(14).text('Software Engineer');
doc.font('Helvetica').fontSize(12)
  .text('Digital Innovations Ltd. | 2020 - 2022')
  .text('• Developed and maintained full-stack applications using modern technologies.');
doc.moveDown();

// Education
doc.font('Helvetica-Bold').fontSize(16).text('Education');

doc.font('Helvetica-Bold').fontSize(14).text('Master of Science in Computer Science');
doc.font('Helvetica').fontSize(12)
  .text('University of Technology | 2018 - 2020');
doc.moveDown();

doc.font('Helvetica-Bold').fontSize(14).text('Bachelor of Technology in Computer Science');
doc.font('Helvetica').fontSize(12)
  .text('Institute of Engineering | 2014 - 2018');
doc.moveDown();

// Skills
doc.font('Helvetica-Bold').fontSize(16).text('Skills');

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Other Technologies',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD']
  }
];

skillCategories.forEach(({ category, skills }) => {
  doc.font('Helvetica-Bold').fontSize(14).text(category);
  doc.font('Helvetica').fontSize(12).text(skills.join(', '));
  doc.moveDown();
});

// Finalize PDF file
doc.end();
