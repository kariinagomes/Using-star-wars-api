import React from 'react';
import './body.css';

const Body = (props) => {
  return (
    <div className="background">
      <section className="body-container">
        {props.children}
      </section>
    </div>
  )
}

export default Body;