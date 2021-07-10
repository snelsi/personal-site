import Affin from "public/images/cards/affin.jpg";
import Orbit from "public/images/cards/orbit.jpg";
import Tulpan from "public/images/cards/Tulpan.jpg";
import SmartCanvas from "public/images/cards/smartCanvas.jpg";
import Medspravki from "public/images/cards/Medspravki.jpg";
import Poker from "public/images/cards/Poker.jpg";
import Tyson from "public/images/cards/Tyson.jpg";
import DailyUI from "public/images/cards/DailyUI.jpg";
import Dashboard from "public/images/cards/Dashboard.jpg";
import MementoMori from "public/images/cards/mementoMori.jpg";
import Hangman from "public/images/cards/hangman.jpg";
import GameOfLife from "public/images/cards/gameOfLife.jpg";
import Hexagons from "public/images/cards/hexagons.jpg";
import ReactParty from "public/images/cards/reactParty.jpg";
import Carshift from "public/images/cards/Carshift.jpg";
import COCOMO from "public/images/cards/COCOMO.jpg";
import Checkwave from "public/images/cards/checkwave.jpg";

export type Tag = "New" | "Ongoing" | "Project" | "Game" | "Fun";

export interface Project {
  url?: string;
  img: any;
  title: string;
  tags: Tag[];
  bgColor?: string;
}

export const projects: Project[] = [
  {
    url: "https://affin.vercel.app/",
    img: Affin,
    title: "Affin - Modular Search Engine for scientific papers",
    tags: ["New", "Project"],
  },
  {
    url: "https://orbit.snelsi.vercel.app/",
    img: Orbit,
    title: "Orbit - Lightweight SVG/CSS orbits generator",
    tags: ["New", "Fun"],
  },
  {
    url: "https://tulpan.snelsi.now.sh/",
    img: Tulpan,
    title: "Tyulpan - Gorgeous Landing page for the Car Service",
    tags: ["Project"],
  },
  {
    url: "https://smart-canvas.now.sh/",
    img: SmartCanvas,
    title: "Smart Canvas - Online Interactive Three.js Demo",
    tags: ["Fun"],
  },
  {
    url: "https://medspravki.snelsi.vercel.app/",
    img: Medspravki,
    title: "Medspravki UA - Nextgen of Medical Certificates",
    tags: ["Project"],
  },
  {
    url: "https://poker.snelsi.now.sh/",
    img: Poker,
    title: "Poker game - My Interview Assignment for Artkai",
    tags: ["Game", "Fun"],
  },
  {
    url: "https://tyson-language.now.sh/",
    img: Tyson,
    title: "Tyson - Modern and Simple Programming Language",
    tags: ["Project"],
  },
  {
    url: "https://dribbble.com/snelsi/collections/2371607-DailyUI",
    img: DailyUI,
    title: "Daily UI Dribbble shots pack",
    tags: ["Ongoing"],
  },
  {
    url: "http://my-dashboard.now.sh/",
    img: Dashboard,
    title: "Cool and Basic Project Management Dashboard",
    tags: ["Project"],
  },
  {
    url: "https://timestamp.snelsi.now.sh/",
    img: MementoMori,
    title: "Timestamp - Motivational calendar for procrastinators",
    tags: ["Project"],
  },
  {
    url: "https://hangman.snelsi.now.sh/",
    img: Hangman,
    title: "Hangman - Can you guess a word?",
    tags: ["Game", "Fun"],
  },
  {
    url: "https://gameoflife.snelsi.now.sh/",
    img: GameOfLife,
    title: "My implementation of Conway's Game of Life",
    tags: ["Game", "Fun"],
  },

  {
    url: "https://hexagons.snelsi.now.sh/",
    img: Hexagons,
    title: "Dancing Canvas Hexagons",
    tags: ["Fun"],
  },
  {
    url: "https://party.snelsi.now.sh/",
    img: ReactParty,
    title: "React Web Sockets Party",
    tags: ["Fun"],
  },
  {
    img: Carshift,
    title: "Mobile Web App for a Car Rent Company",
    tags: ["Project"],
  },
  {
    url: "https://cocomo.now.sh/",
    img: COCOMO,
    title: "COCOMO Calculator, made with Ant Design",
    tags: [],
  },
  {
    url: "https://checkwave.now.sh/",
    img: Checkwave,
    title: "Checkwave 🌊",
    tags: ["Fun"],
  },
];
