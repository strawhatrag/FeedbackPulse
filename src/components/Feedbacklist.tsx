import FeedbackItem from "./FeedbackItem";
import { useEffect, useState } from "react";
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    ).then((response) => {
      if(!response.ok){
        throw new Error("Failed to fetch feedback")
      }
      return response.json();
    }).then((data) => {
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
     }).catch((error) => {
      setErrorMessage('Something went wrong.')
     });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner/> : null}
      {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}
