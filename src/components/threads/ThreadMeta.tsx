import type { Thread } from "../../types/thread";
export function ThreadMeta({ thread }: { thread: Thread; layout?: "home" | "board" }) {
  return (
    <div className="meta">
      <span>/{thread.board}</span>
      <i>•</i><span>{thread.replies} replies</span><i>•</i><span>{thread.images} images</span>
    </div>
  );
}
