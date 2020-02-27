import React from 'react';

const Marker = React.memo(({ number, title }) => {
  const markerStyle = {
    background: `url(${'/icon/pin.png'}) no-repeat center`,
    backgroundSize: '20px 34px',
    width: '20px',
    height: '34px',
    position: 'relative',
    left: '-10px',
    top: '-34px',
    textAlign: 'center',
  };
  const markerTitle = {
    textIndent: '-9999px',
    overflow: 'hidden',
  };
  const markerNumber = {
    fontSize: '14px',
    color: '#fff',
    lineHeight: '20px',
  };
  return (
    <div style={markerStyle}>
      <h2 style={markerTitle}>{title}</h2>
      <span style={markerNumber}>{parseInt(number + 1)}</span>
    </div>
  );
});

export default Marker;
