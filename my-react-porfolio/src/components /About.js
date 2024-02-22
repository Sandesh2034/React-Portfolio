// components/About.js

import React from 'react';

const About = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <p>Hey there! I'm Sandesh, an emerging web developer with a zest for turning creative concepts into captivating digital realities. My journey in web development is fueled by a passion for crafting visually stunning and functionally seamless online experiences...</p>
          <h3 className="mb-3">Skills</h3>
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Contact Me</h2>
          <p>Feel free to contact me at <a href="mailto:sandesh2034@gmail.com" className="hover-link">sandesh2034@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
