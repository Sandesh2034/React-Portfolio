// components/Work.js

import React from 'react';

const Work = () => {
  return (
    <section id="work-section" className="container my-5 p-4 bg-white rounded">
      <h2>Work</h2>
      <a href="https://sandesh2034.github.io/prework-study-guide/" target="_blank">
        <img src="images/Web Profile.png" alt="Large Image" className="img-fluid" style={{ maxHeight: '20%', objectFit: 'cover' }} />
      </a>
      {/* Additional work items can be added here */}
    </section>
  );
};

export default Work;
