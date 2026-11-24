import type { Thread } from '../../types/thread'; import { ThreadCard } from './ThreadCard';
export function ThreadList({ threads }: { threads: Thread[] }) { return <div className="threadList">{threads.map(thread => <ThreadCard key={thread.id} thread={thread} />)}</div>; }
