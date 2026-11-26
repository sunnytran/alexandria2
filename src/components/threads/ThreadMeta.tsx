import type { Thread } from "../../types/thread";
export function ThreadMeta({ thread, layout }: { thread: Thread; layout?: "home" | "board" }) {
  return (
    <div className="meta">
      <span>/{thread.board}</span>
      <i>•</i><span>{thread.replies} replies</span><i>•</i><span>{thread.images} images</span>
      {layout === "board" && <button type="button" className="share">Share</button>}
    </div>
  );
}
