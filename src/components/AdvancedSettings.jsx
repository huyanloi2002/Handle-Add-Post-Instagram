import React from "react";
import { setPost } from "../store/action";

const AdvancedSettings = ({ value }) => {
  const [state, dispatch] = value;
  const { post } = state;

  const handleSetHideLike = () => {
    dispatch(setPost({ ...post, isOpenLike: !post.isOpenLike }));
  };

  const handleSetTurnOffComment = () => {
    dispatch(setPost({ ...post, isComment: !post.isComment }));
  };
  return (
    <React.Fragment>
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "start",
            gap: 5,
            flexDirection: "column",
            margin: "1rem 0",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Hide like and view counts on this post
            </span>
            <button
              style={{ margin: "0 0.5rem", cursor: "pointer" }}
              onClick={() => handleSetHideLike()}
            >
              {post.isOpenLike ? "Turn up" : "Turn off"}
            </button>
          </div>
          <div>
            <blockquote style={{ padding: 0, margin: 0, fontSize: "10px" }}>
              {`Only you will see the total number of likes and views on this
              post. You can change this later by going to the ··· menu at the
              top of the post. To hide like counts on other people's posts, go
              to your account settings.`}
            </blockquote>
          </div>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "start",
            gap: 5,
            flexDirection: "column",
            margin: "1rem 0",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Turn off commenting
            </span>
            <button
              style={{ margin: "0 0.5rem", cursor: "pointer" }}
              onClick={() => handleSetTurnOffComment()}
            >
              {post.isComment ? "Turn up" : "Turn off"}
            </button>
          </div>
          <div>
            <blockquote style={{ padding: 0, margin: 0, fontSize: "10px" }}>
              {`You can change this later by going to the ··· menu at the top of your post.`}
            </blockquote>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default AdvancedSettings;
