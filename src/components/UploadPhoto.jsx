import React from "react";
import { setPost } from "../store/action";

const UploadPhoto = ({ value, nameStep }) => {
  const [state, dispatch] = value;

  const { post } = state;

  const handleChangePreviewPhoto = (e) => {
    const file = e.target.files;

    let listPhotos = [];

    for (var i = 0; i < file.length; i++) {
      const urlPhoto = URL.createObjectURL(file[i]);

      listPhotos.push({ urlPhoto, alt: "", tags: [] });
    }

    dispatch(setPost({ ...post, photos: post.photos.concat(listPhotos) }));
  };
  return (
    <React.Fragment>
      <h1>{nameStep}</h1>
      <input
        type="file"
        name="photos[]"
        multiple
        onChange={(e) => handleChangePreviewPhoto(e)}
      />
    </React.Fragment>
  );
};

export default UploadPhoto;
