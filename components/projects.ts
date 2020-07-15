export type Tag = "New" | "Ongoing" | "Project" | "Game" | "Fun";

export interface Project {
  url?: string;
  img: string;
  title: string;
  tags: Tag[];
}

export const projects: Project[] = [
  {
    url: "https://medspravki.snelsi.vercel.app/",
    img: "cards/Medspravki.jpg",
    title: "Medspravki UA - Next generation of Medical Certificates",
    tags: ["New", "Project"],
  },
  {
    url: "https://poker.snelsi.now.sh/",
    img: "cards/Poker.jpg",
    title: "Poker game - My Interview Assignment for Artkai",
    tags: ["New", "Game", "Fun"],
  },
  {
    url: "https://tyson-language.now.sh/",
    img: "cards/Tyson.jpg",
    title: "Tyson - Modern and Simple Programming Language",
    tags: ["Project"],
  },
  {
    url: "https://dribbble.com/snelsi/collections/2371607-DailyUI",
    img: "cards/DailyUI.jpg",
    title: "Daily UI Dribbble shots pack",
    tags: ["Ongoing"],
  },
  {
    url: "http://my-dashboard.now.sh/",
    img: "cards/Dashboard.jpg",
    title: "Tasks Managament Dashboard with beautiful-dnd",
    tags: ["Project"],
  },
  {
    url: "https://timestamp.snelsi.now.sh/",
    img: "cards/mementoMori.jpg",
    title: "Timestamp - Motivational calendar for procrastinators",
    tags: ["Project"],
  },
  {
    url: "https://hangman.snelsi.now.sh/",
    img: "cards/hangman.jpg",
    title: "Hangman - Can you guess a word?",
    tags: ["Game", "Fun"],
  },
  {
    url: "https://gameoflife.snelsi.now.sh/",
    img: "cards/gameOfLife.jpg",
    title: "My implementation of Conway's Game of Life",
    tags: ["Game", "Fun"],
  },

  {
    url: "https://hexagons.snelsi.now.sh/",
    img: "cards/hexagons.jpg",
    title: "Dancing Canvas Hexagons",
    tags: ["Fun"],
  },
  {
    url: "https://party.snelsi.now.sh/",
    img: "cards/reactParty.jpg",
    title: "React Web Sockets Party",
    tags: ["Fun"],
  },
  {
    img: "cards/Carshift.jpg",
    title: "Mobile Web App for a Car Rent Company",
    tags: ["Project"],
  },
  {
    url: "https://cocomo.now.sh/",
    img: "cards/COCOMO.jpg",
    title: "COCOMO Calculator, made with Ant Design",
    tags: [],
  },
  {
    url: "https://checkwave.now.sh/",
    img: "cards/checkwave.jpg",
    title: "Checkwave 🌊",
    tags: ["Fun"],
  },
];
