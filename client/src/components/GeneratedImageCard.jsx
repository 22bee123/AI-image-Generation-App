import React from 'react';

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : src ? (
        <img src={src} alt="Generated Image" />
      ) : (
        <div>Image will be displayed here</div>
      )}
    </div>
  );
};

export default GeneratedImageCard;
