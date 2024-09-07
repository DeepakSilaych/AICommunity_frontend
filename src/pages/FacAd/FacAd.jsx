import React from 'react';
import styles from './FacAd.module.css'; 

const FacultyAdvisor = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl text-white mb-5">Know the Faculty Advisor</h1>
      <div className="w-full text-base max-w-2xl p-5 rounded-lg shadow-md bg-gray-800 animate-fadeIn">
        <p className="text-white leading-relaxed">
          Al Community at IITB is advised by Prof. Amit Sethi. He's a professor at the Electrical Engineering dept. of IIT-Bombay and an adjunct faculty at the Dept. of Pathology at the University of Illinois, Chicago (UIC). His research interests lie in Deep learning, machine learning, image processing, computer vision, and medical image analysis. You can get to know more about him by visiting his <a href="https://www.ee.iitb.ac.in/~asethi/" className="text-green-400 hover:text-green-600 underline animate-pulse">webpage</a>. The work Al Community does is all made possible by a group of dedicated individuals enthusiastic about research and innovation in the field.
        </p>
        <ul className="mt-4 pl-5 text-white text-sm">
          <li>Interests: Deep learning, machine learning, image processing, computer vision, medical image analysis.</li>
          <li>Professor, Dept. of EE, IIT Bombay</li>
          <li>Adjunct faculty, Dept. of Pathology, UIC</li>
          <li>PhD in ECE, MS in GE, UIUC; BTech in EE, IIT Delhi</li>
        </ul>
      </div>
      <div className="w-full max-w-xs mt-5">
        <img src='./img/amitsethi.png' alt="Prof. Amit Sethi" className={`w-full rounded-lg ${styles['faculty-prof-image']}`} />
      </div>
    </div>
  );
};

export default FacultyAdvisor;
