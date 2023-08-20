import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  const resumeData = {
    name: 'Oleksii Potapov',
    title: 'Software Developer',
    summary:
      'Experienced Web Developer. Proficient in JavaScript, HTML/CSS, Angular, React, and other technologies. Postgraduate education in Law. Solution-focused and analytical with an eye for detail.',
    contact: {
      email: 'oleksii.potapov@keyin.com',
      linkedin: 'https://www.linkedin.com/in/alexey-potapov-2175441b3/',
    },
    education: {
      degree: 'Diploma in Software Development, someday in the future =)',
      school: 'Keyin College, NL Canada',
    },
  };

  const { name, title, summary, contact, education } = resumeData;

  return (
    <div className={styles['card']}>
      <h2>About Me</h2>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{summary}</p>

      <h3>Contact Information</h3>
      <p>Email: {contact.email}</p>
      <p>
        LinkedIn: <a target="_blank" rel="noopener noreferrer" href={contact.linkedin}>{contact.linkedin}</a>
      </p>

      <h3>Education</h3>
      <p>{education.degree}</p>
      <p>{education.school}</p>
    </div>
  );
};

export default AboutPage;
