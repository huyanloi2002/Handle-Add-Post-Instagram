import React from "react";
import { addPost, setPost } from "../store/action";

const ButtonStep = ({ steps, setStep, step, value }) => {
  const [state, dispatch] = value;
  const { post } = state;
  const handlePrevStep = () => {
    setStep((prev) => {
      if (prev === 1) return prev;

      return prev - 1;
    });
  };

  const handleNextStep = () => {
    setStep((prev) => {
      if (prev === steps.length) return prev;

      return prev + 1;
    });
  };
  const handleAddPost = () => {
    dispatch(addPost(post));
    dispatch(
      setPost({
        caption: "",
        photos: [],
        location: { name: "", loc: [] },
        number_likes: 0,
        isOpenLike: false,
        isComment: false,
      })
    );
  };
  return (
    <React.Fragment>
      <div>
        {step !== 1 ? (
          <button onClick={handlePrevStep}>Prev</button>
        ) : (
          <button>Exit</button>
        )}
        {step !== steps.length ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button onClick={() => handleAddPost()}>Share</button>
        )}
      </div>
    </React.Fragment>
  );
};

export default ButtonStep;
