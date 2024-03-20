import React, { useState } from "react";
import { setPost } from "../store/action";
import UploadPhoto from "./UploadPhoto";

const EditPreviewPhoto = ({ value, setIdPreviewPhoto, idPreviewPhoto }) => {
  const [state, dispatch] = value;

  const { post } = state;

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const handleDeletePhoto = (e, index) => {
    e.stopPropagation();
    const newListPhotos = post.photos.filter((el, idx) => idx !== index);

    dispatch(setPost({ ...post, photos: newListPhotos }));

    setIdPreviewPhoto((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <React.Fragment>
      <button onClick={() => setIsOpenEdit(!isOpenEdit)}>Edit</button>
      {isOpenEdit && (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {post.photos &&
              post.photos.map((photo, index) => (
                <div
                  key={index}
                  style={{ position: "relative", width: "300px" }}
                >
                  <img
                    src={photo.urlPhoto}
                    alt={photo.alt}
                    width={150}
                    height={100}
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      opacity: index === idPreviewPhoto ? "1" : "0.5",
                    }}
                    onClick={() => setIdPreviewPhoto(index)}
                  />
                  {index === idPreviewPhoto && (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "28px",
                        color: "red",
                        cursor: "pointer",
                        position: "absolute",
                      }}
                      onClick={(e) => handleDeletePhoto(e, index)}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
          </div>
          <div>
            <UploadPhoto value={value} />
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default EditPreviewPhoto;
