import React from 'react';

const photoStyle = {
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.8,
};

function CustomizablePhoto({ src, alt }) {
  return (
    <div
      style={{ ...photoStyle, backgroundImage: `url(${src})` }}
      alt={alt}
    ></div>
  );
}

export default CustomizablePhoto;
