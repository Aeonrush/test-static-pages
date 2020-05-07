import React from "react";

export const Gallery = React.memo(({ pictures }) => {
  if (!pictures || !Array.isArray(pictures)) {
    return null;
  }

  return (
    <div>
      {pictures.map(({ src, alt }, index) => (
        <div key={`${src}-${alt}`}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
});
