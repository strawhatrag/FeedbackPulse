
import { TriangleUpIcon } from '@radix-ui/react-icons';


type FeedbackItems = {
  upVoteCount: number,
  badgeLetter: string,
  companyName: string,
  text: string,
  daysAgo: number,
}

type FeedbackItemProps = { feedbackItem: FeedbackItems};

export default function FeedbackItem({ feedbackItem } : FeedbackItemProps) {
  return (
    <li className="feedback">
        <button>
          <TriangleUpIcon/>
          <span>{feedbackItem.upVoteCount}</span></button>
        <div>
          <p>{feedbackItem.badgeLetter}</p>
        </div>
        <div>
        <p>{feedbackItem.companyName}</p>
        <p>
        {feedbackItem.text}
        </p>
      </div>{" "}
      <p>{feedbackItem.daysAgo}</p>
      </li>
  )
}
