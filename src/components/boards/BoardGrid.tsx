import type { Board } from "../../types/board";
import { BoardLink } from "./BoardLink";
export function BoardGrid({ boards }: { boards: Board[] }) {
  return (
    <div className="boardGrid">
      {boards.map((board) => (
        <BoardLink key={board.id} board={board} />
      ))}
    </div>
  );
}
