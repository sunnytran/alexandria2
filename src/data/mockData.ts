import type { Board } from "../types/board";
import type { Thread } from "../types/thread";
const names = ["anime", "video games", "technology", "television", "music", "literature", "fitness", "politics", "paranormal"];
export const boards: Board[] = names.map((name) => ({ id: name.replace(/ /g, "-"), name }));
const image = (url: string) => `https://images.unsplash.com/${url}?auto=format&fit=crop&w=600&q=80`;
export const threads: Thread[] = [
  { id: "stoicism", board: "lit", title: "Is Stoicism still relevant in the modern world?", replies: 142, images: 27, timestamp: "01/26/25 14:37", image: image("photo-1495446815901-a7297e633e8d") },
  { id: "anime-2020s", board: "a", title: "Best anime of the 2020s so far?", replies: 368, images: 92, timestamp: "01/26/25 12:03", image: image("photo-1578632767115-351597cf2477") },
  { id: "keyboard-general", board: "g", title: "Mechanical keyboard general", replies: 587, images: 136, timestamp: "01/26/25 09:58", image: image("photo-1587829741301-dc798b83add3") },
  { id: "essential-post-punk", board: "music", title: "Essential post-punk albums?", description: "What are the essential post-punk albums everyone should hear?", replies: 86, images: 14, timestamp: "01/26/25 13:42", image: image("photo-1516280440614-37939bbacd81") },
  { id: "vinyl-pickups", board: "music", title: "New vinyl pickups", description: "Show off the records you've picked up recently.", replies: 54, images: 31, timestamp: "01/26/25 11:18", image: image("photo-1539375665275-f9de415ef9ac") },
  { id: "rate-my-taste", board: "music", title: "Rate my taste", description: "Post your top artists and albums and let the board judge.", replies: 112, images: 8, timestamp: "01/26/25 10:27", image: image("photo-1493225457124-a3eb161ffa5f") },
  { id: "music-studying", board: "music", title: "Best music for studying?", description: "What do you listen to when you need to focus?", replies: 39, images: 3, timestamp: "01/25/25 22:14", image: image("photo-1511379938547-c1f69419868d") },
  { id: "ambient-general", board: "music", title: "Ambient general", description: "Share your favorite ambient records, artists, and deep cuts.", replies: 73, images: 19, timestamp: "01/25/25 18:06", image: image("photo-1514525253161-7a46d19cd819") },
];
