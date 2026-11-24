import type { Thread } from '../../types/thread';
export function ThreadMeta({ thread }: { thread: Thread }) { return <div className="meta"><span>/{thread.board}</span><span>{thread.replies} replies</span>{thread.images > 0 && <span>{thread.images} images</span>}<span>{thread.timestamp}</span></div>; }
