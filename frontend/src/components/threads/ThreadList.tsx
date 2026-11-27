import type { Thread } from "../../types/thread";
import { ThreadCard } from "./ThreadCard";
export function ThreadList({ threads, layout = "home" }: { threads: Thread[]; layout?: "home" | "board" }) {
  return (
    <div className="threadList">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} layout={layout} />
      ))}
    </div>
  );
}
