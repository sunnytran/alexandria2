import { useState } from "react";
export function PostComposer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [text, setText] = useState("");
  if (!open) return null;
  return (
    <form
      className="composer"
      onSubmit={(e) => {
        e.preventDefault();
        setText("");
        onClose();
      }}
    >
      <div className="composerHeader"><strong>Create Post</strong><button type="button" onClick={onClose} aria-label="Close">×</button></div>
      <textarea
        autoFocus
        placeholder="Post text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="composerFooter">
        <label className="fileButton">Choose File<input type="file" /></label><span className="fileStatus">No file chosen</span>
        <div>
          <button type="button" className="button secondary" onClick={onClose}>
            close
          </button>{" "}
          <button className="button" type="submit">
            post
          </button>
        </div>
      </div>
    </form>
  );
}
