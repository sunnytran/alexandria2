import { useState } from "react";
export function PostComposer() {
  const [text, setText] = useState("");
  return (
    <form
      className="composer"
      onSubmit={(e) => {
        e.preventDefault();
        setText("");
      }}
    >
      <div className="composerHeader"><strong>Create Post</strong></div>
      <textarea
        autoFocus
        placeholder="Post text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="composerFooter">
        <label className="fileButton">Choose File<input type="file" /></label><span className="fileStatus">No file chosen</span>
        <div>
          <button className="button" type="submit">
            post
          </button>
        </div>
      </div>
    </form>
  );
}
