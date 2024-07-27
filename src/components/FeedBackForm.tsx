import { useState } from "react";
import { MAX_CHARACTER } from './../lib/constants';



export default function FeedBackForm() {
  const [text, setText] = useState("");


  const charCount = MAX_CHARACTER - text.length;
  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        id="feedback-textarea"
        placeholder="blah"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>Submit</button>
      </div>
    </form>
  );
}
