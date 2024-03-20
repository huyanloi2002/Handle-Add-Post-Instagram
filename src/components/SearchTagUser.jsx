import React, { useState } from "react";
import usersData from "../data/usersData.json";
import { setPost } from "../store/action";

const SearchTagUser = ({
  value,
  idCurrentImage,
  setIsTag,
  idTag,
  positionTag,
}) => {
  const [state, dispatch] = value;
  const [listSearchTags, setListSearchTags] = useState([]);
  const { post } = state;

  const handleSearchTagUser = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      const newTag = usersData.filter(
        (item) => item.name.substring(0, value.length) === value
      );
      setListSearchTags(newTag);
    } else {
      setListSearchTags([]);
    }
  };

  const handleSelectUserTag = (user) => {
    const updatePhoto = post.photos.map((item, idx) => {
      if (idx === idCurrentImage) {
        return {
          ...item,
          tags: [
            ...item.tags,
            {
              ...item.tags[idTag],
              position: positionTag,
              imageId: idCurrentImage,
              usersData: user,
            },
          ],
        };
      } else {
        return item;
      }
    });
    dispatch(setPost({ ...post, photos: updatePhoto }));
    setIsTag(false);
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "black",
          padding: "0.2rem",
          color: "white",
        }}
      >
        <span>Tag:</span>
        <input
          type="text"
          placeholder="Search"
          style={{ outline: "none" }}
          onChange={(e) => handleSearchTagUser(e)}
        />
        {listSearchTags && listSearchTags.length > 0 && (
          <ul style={{ listStyle: "none", padding: "0 10px" }}>
            {listSearchTags.map((item) => (
              <li
                key={item.id}
                style={{
                  margin: "0.5rem 0",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleSelectUserTag(item)}
              >
                <b>{item.name}</b>
                <span style={{ fontSize: "12px" }}>{item.nickname}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchTagUser;
