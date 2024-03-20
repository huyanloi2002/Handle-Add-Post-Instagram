import React from "react";
import { setPost } from "../store/action";

const Accessibility = ({ value }) => {
  const [state, dispatch] = value;

  const { post } = state;

  const handleChangeAltPhoto = (e, index) => {
    //Lay gia tri value
    //Lay mang post de tim ra gia tri co cung so index khi nhap value
    //Thay the gia tri moi vao gia tri cu

    const { value } = e.target;
    const updatePhotos = post.photos.map((item, idx) => {
      if (idx === index) {
        const newPhoto = { ...item, alt: value };
        return newPhoto;
      } else {
        return item;
      }
    });

    dispatch(setPost({ ...post, photos: updatePhotos }));
  };
  return (
    <React.Fragment>
      <blockquote style={{ padding: 0, margin: 0, fontSize: "10px" }}>
        Alt text describes your photos for people with visual impairments. Alt
        text will be automatically created for your photos or you can choose to
        write your own.
      </blockquote>
      <ul>
        {post.photos.map((item, index) => (
          <li
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 5 }}
          >
            <img
              src={item.urlPhoto}
              width={50}
              height={30}
              style={{ border: "1px solid black" }}
            />
            <input
              type="text"
              style={{
                border: "1px solid black",
                height: "30px",
                padding: "0 0.5rem",
              }}
              placeholder="Write alt text..."
              onChange={(e) => handleChangeAltPhoto(e, index)}
              value={item.alt}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Accessibility;
