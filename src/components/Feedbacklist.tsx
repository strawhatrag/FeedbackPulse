
import FeedbackItem from "./FeedbackItem";

const feedbackItems = [{
  upvoteCount: 591,
  badgeLetter: "B",
  companyName: "Google",
  text: "test test",
  daysAgo: 4,
},]

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
     {feedbackItems.map((feedbackItem) => {
      return <FeedbackItem feedbackItem={feedbackItem} />
     })}

    </ol>
  );
}
