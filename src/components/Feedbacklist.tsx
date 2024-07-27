import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function Feedbacklist() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon/>
          <span>593</span></button>
        <div>
          <p>B</p>
        </div>
        <div>
        <p>Cisco</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eaque tempora ea accusantium, deserunt ullam!
        </p>
      </div>{" "}
      <p>4d</p>
      </li>
    
    </ol>
  );
}
