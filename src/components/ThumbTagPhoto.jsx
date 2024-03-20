import React, { useEffect, useRef, useState } from "react";
import SearchTagUser from "./SearchTagUser";
import { setPost } from "../store/action";

const ThumbTagPhoto = ({ value, idPreviewPhoto, isTag, setIsTag }) => {
  const thumbRef = useRef();

  const [idCurrentImage, setIdCurrentImage] = useState(0);
  const [positionTag, setPositionTag] = useState([]);
  const [idTag, setIdTag] = useState(0);
  const [state, dispatch] = value;
  const { post } = state;
  useEffect(() => {
    const oldTags = post.photos[idCurrentImage].tags[idTag];
    if (oldTags && oldTags.usersData) {
      setIdTag(post.photos[idCurrentImage].tags.length);
    }
  }, [post.photos, idCurrentImage, idTag]);

  console.log(post);

  const handleSetPostionTag = (e) => {
    //Vị trí của thumbRef trên screen
    const bound = thumbRef.current.getBoundingClientRect();

    //e.Client(X, Y) là vị trí của con trỏ (tổng có trên screen)

    //Position Cursor In Thumb (X, Y): lấy tổng con trỏ - vị trí thumb => vị trí con trỏ trong thumb
    //X
    const xTag = e.clientX - bound.left;
    //Y
    const yTag = e.clientY - bound.top;
    setPositionTag([xTag, yTag]);
    setIsTag(true);
    setIdCurrentImage(idPreviewPhoto);
  };

  const handelDeleteTag = (index) => {
    const updateTags = post.photos[idCurrentImage].tags.filter(
      (el, idx) => idx !== index
    );

    dispatch(
      setPost({
        ...post,
        photos: post.photos.map((item, index) => {
          if (index === idCurrentImage) {
            return {
              ...item,
              tags: updateTags,
            };
          }
          return item;
        }),
      })
    );
  };

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          cursor: "pointer",
        }}
        ref={thumbRef}
        onClick={(e) => handleSetPostionTag(e)}
      ></div>
      {isTag && idPreviewPhoto === idCurrentImage && (
        <div
          style={{
            position: "absolute",
            left: positionTag[0],
            top: positionTag[1],
            cursor: "pointer",
          }}
        >
          <SearchTagUser
            value={value}
            idCurrentImage={idCurrentImage}
            positionTag={positionTag}
            setIsTag={setIsTag}
            idTag={idTag}
          />
        </div>
      )}
      {idPreviewPhoto === idCurrentImage &&
        post.photos &&
        post.photos[idCurrentImage].tags.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: item.position[0],
              top: item.position[1],
              cursor: "pointer",
              backgroundColor: "black",
              color: "white",
              padding: "0 0.5rem",
            }}
          >
            <span> {item.usersData.nickname}</span>
            <span
              style={{ marginLeft: "0.5rem" }}
              onClick={() => handelDeleteTag(idx)}
            >
              &times;
            </span>
          </div>
        ))}
    </React.Fragment>
  );
};

export default ThumbTagPhoto;
