import { useState } from "react";
import { threads } from "../data/mockData";
import { Header } from "../components/shared/Header";
import { ThreadList } from "../components/threads/ThreadList";
import { Tabs } from "../components/ui/Tabs";
import { PostComposer } from "../components/composer/PostComposer";
export function BoardPage({ board = "music" }: { board?: string }) {
  const [tab, setTab] = useState("all threads");
  const [compose, setCompose] = useState(true);
  const boardThreads = threads.filter((t) => t.board === board);
  const visible = tab === "popular" ? [...boardThreads].sort((a, b) => b.replies - a.replies) : tab === "recent" ? [...boardThreads].reverse() : boardThreads;
  return <div className="shell"><div className="page"><Header /><main>
    <section className="boardIntro"><h1>/{board}</h1><button className="createButton" onClick={() => setCompose(true)}>Create Post</button></section>
    <section className="section"><Tabs active={tab} onChange={setTab} /><ThreadList threads={visible} layout="board" /></section>
    <PostComposer open={compose} onClose={() => setCompose(false)} />
  </main></div></div>;
}
