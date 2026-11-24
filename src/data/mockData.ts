import type { Board } from "../types/board";
import type { Thread } from "../types/thread";

export const boards: Board[] = [
  { id: "general", name: "general", description: "The common room" },
  { id: "ideas", name: "ideas", description: "Thoughts in progress" },
  { id: "reading", name: "reading", description: "Books, essays, and notes" },
  { id: "images", name: "images", description: "A place for visual things" },
];

export const threads: Thread[] = [
  {
    id: "one",
    board: "general",
    title: "What are you thinking about?",
    description:
      "A small place to leave a thought, a question, or an unfinished idea.",
    replies: 18,
    images: 2,
    timestamp: "12 minutes ago",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "two",
    board: "reading",
    title: "Books that stayed with you",
    description:
      "The books that keep returning to your mind long after the last page.",
    replies: 42,
    images: 0,
    timestamp: "1 hour ago",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "three",
    board: "ideas",
    title: "On making things slowly",
    replies: 7,
    images: 1,
    timestamp: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "four",
    board: "images",
    title: "A collection of quiet corners",
    replies: 31,
    images: 12,
    timestamp: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
];
