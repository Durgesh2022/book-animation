import React, { useState, useEffect } from 'react';
import './form.css';

const DiaryForm = () => {
  const fullText = "I  am a skilled software developer with a solid foundation in TypeScript and JavaScript, along with extensive expertise in leading frameworks like Next.js, React.js, Node.js, and Express.js. My experience spans full-stack development, including database management with MongoDB, PostgreSQL, and Prisma, enabling me to build efficient, data-driven applications. As a quick learner, I continually stay updated on industry trends, integrating the latest technologies to ensure scalability, performance, and long-term stability in every project. I work collaboratively with clients, taking the time to understand their unique requirements and transforming ideas into practical, user-friendly solutions that address real-world challenges. If you’re looking to turn your vision into a powerful application, let’s work together to bring your ideas to life.";
  
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1)); // Take a slice of fullText up to current index
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust typing speed (in ms) here
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="form-container">
      <h1>{displayedText}</h1>
    </div>
  );
};

export default DiaryForm;