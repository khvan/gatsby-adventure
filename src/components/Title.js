import React from 'react';

const Title = ({title, subtitle}) => {
  return (
    <div>
      <h4>
        <span className="title">{title}</span>
        <span> {subtitle}</span>
      </h4>
    </div>
  );
};

export default Title;
