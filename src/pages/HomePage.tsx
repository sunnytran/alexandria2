import { boards, threads } from "../data/mockData";
import { Header } from "../components/shared/Header";
import { SectionHeading } from "../components/shared/SectionHeading";
import { BoardGrid } from "../components/boards/BoardGrid";
import { ThreadList } from "../components/threads/ThreadList";
export function HomePage() {
  return <div className="shell"><div className="page"><Header /><main>
    <section className="section boardsSection"><SectionHeading>Boards</SectionHeading><BoardGrid boards={boards} columns={3} /></section>
    <section className="section"><SectionHeading>Popular Threads</SectionHeading><ThreadList threads={threads.slice(0, 3)} layout="home" /></section>
  </main></div></div>;
}
