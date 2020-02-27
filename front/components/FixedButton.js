import React from 'react';
const FixedButton = ({ text, loading }) => {
  return (
    <div className="fixed-btnbox">
      <button className="btn bolder" type="submit">
        {text}
      </button>
    </div>
  );
};

export default FixedButton;
