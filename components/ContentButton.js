import React from 'react';

const ContentButton = ({ icon, text, height = 'auto' }) => {
  return (
    <>
      <span>
        <img src={icon} alt={text} height={height} />
      </span>{' '}
      {text}
    </>
  );
};

export default ContentButton;
