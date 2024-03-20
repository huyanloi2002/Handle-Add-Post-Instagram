import React, { useState } from "react";
import EditPreviewPhoto from "./EditPreviewPhoto";
import ThumbTagPhoto from "./ThumbTagPhoto";

const PreviewPhoto = ({ value, step }) => {
  const [idPreviewPhoto, setIdPreviewPhoto] = useState(0);
  const [isTag, setIsTag] = useState(false);

  const [state] = value;
  const { post } = state;

  const handleNextPhoto = () => {
    setIdPreviewPhoto((prev) => {
      if (idPreviewPhoto === post.photos.length - 1) return prev;
      return prev + 1;
    });
    setIsTag(false);
  };

  const handlePrevPhoto = () => {
    setIdPreviewPhoto((prev) => {
      if (idPreviewPhoto === 0) return prev;
      return prev - 1;
    });
    setIsTag(false);
  };

  return (
    <React.Fragment>
      <div>
        <div style={{ width: "200px", height: "150px", position: "relative" }}>
          <img
            src={post.photos[idPreviewPhoto].urlPhoto}
            alt={post.photos[idPreviewPhoto].alt}
            style={{ width: "100%", height: "100%" }}
          />
          {step === 2 && (
            <ThumbTagPhoto
              value={value}
              idPreviewPhoto={idPreviewPhoto}
              isTag={isTag}
              setIsTag={setIsTag}
            />
          )}
        </div>

        <button onClick={handlePrevPhoto} disabled={idPreviewPhoto === 0}>
          Prev
        </button>

        <button
          onClick={handleNextPhoto}
          disabled={idPreviewPhoto === post.photos.length - 1}
        >
          Next
        </button>
        {step === 1 && (
          <EditPreviewPhoto
            value={value}
            setIdPreviewPhoto={setIdPreviewPhoto}
            idPreviewPhoto={idPreviewPhoto}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default PreviewPhoto;
