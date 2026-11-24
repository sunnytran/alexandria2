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
      <textarea
        autoFocus
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="composerFooter">
        <input type="file" />
        <div>
          <button type="button" className="button secondary" onClick={onClose}>
            cancel
          </button>{" "}
          <button className="button" type="submit">
            publish
          </button>
        </div>
      </div>
    </form>
  );
}
