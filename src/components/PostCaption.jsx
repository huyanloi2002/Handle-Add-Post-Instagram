import React from "react";
import { setPost } from "../store/action";
import PreviewPhoto from "./PreviewPhoto";
import LocationInput from "./LocationInput";
import DropButton from "./DropButton";
import Accessibility from "./Accessibility";
import AdvancedSettings from "./AdvancedSettings";

const PostCaption = ({ value, step }) => {
  const [state, dispatch] = value;

  const { post } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setPost({ ...post, [name]: value }));
  };

  const handleChangeLocation = (e) => {
    const { value } = e.target;

    dispatch(setPost({ ...post, location: { name: value } }));
  };

  return (
    <React.Fragment>
      <PreviewPhoto value={value} step={step} />
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        <form action="" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="caption">Caption</label>
          <textarea
            type="text"
            name="caption"
            onChange={(e) => handleChange(e)}
            value={post.caption}
            rows={5}
          />
        </form>
        <LocationInput onChange={handleChangeLocation} value={value} />
        <DropButton
          name="Accessibility"
          render={<Accessibility value={value} />}
        />
        <DropButton
          name="Advanced settings"
          render={<AdvancedSettings value={value} />}
        />
      </div>
    </React.Fragment>
  );
};

export default PostCaption;
