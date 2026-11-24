import type { Board } from '../../types/board';
export function BoardLink({ board }: { board: Board }) { return <a className="boardLink" href={`#board/${board.id}`}><div className="boardName">/{board.name}</div><div className="boardDescription">{board.description}</div></a>; }
