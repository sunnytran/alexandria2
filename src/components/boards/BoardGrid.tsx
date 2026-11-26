import type { Board } from "../../types/board";
import { BoardLink } from "./BoardLink";
export function BoardGrid({ boards, columns = 3 }: { boards: Board[]; columns?: number }) {
  return (
    <div className="boardGrid" style={{ "--board-columns": columns } as React.CSSProperties}>
      {boards.map((board) => (
        <BoardLink key={board.id} board={board} />
      ))}
    </div>
  );
}
