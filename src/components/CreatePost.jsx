import React from "react";
import { useStore } from "../hooks/useStore";
import Stepper from "./Stepper";
import PostCaption from "../components/PostCaption";
import UploadPhoto from "./UploadPhoto";
import PreviewPhoto from "./PreviewPhoto";

const steps = [
  { id: 1, name: "Edit", render: PreviewPhoto },
  { id: 2, name: "Create new post", render: PostCaption },
];

const CreatePost = () => {
  const [state, dispatch] = useStore();

  const { post, posts } = state;

  console.log(posts);

  return (
    <React.Fragment>
      {post.photos.length <= 0 ? (
        <UploadPhoto value={[state, dispatch]} nameStep={steps[1].name} />
      ) : (
        <Stepper value={[state, dispatch]} steps={steps} />
      )}
    </React.Fragment>
  );
};

export default CreatePost;
