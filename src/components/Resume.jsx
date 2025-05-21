import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    window.open('/ShraddhaSaraf_resume.pdf', '_blank', 'noopener,noreferrer');
  }, []);

  return null;
};

export default Resume;
