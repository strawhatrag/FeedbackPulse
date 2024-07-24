export default function FeedBackForm() {
  return (
    <form className="form">
      <label htmlFor="feedback-textarea">Enter your feedback here, remember to #hashtag the company</label>
      <textarea id="feedback-textarea" placeholder="blah" spellCheck={false} ></textarea>
      <div>
        <p className="u-italic">150</p>
        <button>Submit</button>
      </div>
    </form>
  );
}
