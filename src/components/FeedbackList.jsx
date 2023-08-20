import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import { nanoid } from 'nanoid'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={nanoid()} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
