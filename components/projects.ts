export type Tag = "New" | "Ongoing" | "Project" | "Game" | "Fun";

export interface Project {
  url?: string;
  img: string;
  title: string;
  tags: Tag[];
  bgColor?: string;
}

export const projects: Project[] = [
  {
    url: "https://affin.vercel.app/",
    img: "cards/affin.jpg",
    title: "Affin - Modular Search Engine for scientific papers",
    tags: ["New", "Project"],
    bgColor:
      "linear-gradient(94.56deg, #00083A 3.91%, #12379C 42.26%, #1732CD 60%, #393DB8 84%, #181F63 97.78%)",
  },
  {
    url: "https://orbit.snelsi.vercel.app/",
    img: "cards/orbit.jpg",
    title: "Orbit - Lightweight SVG/CSS orbits generator",
    tags: ["New", "Fun"],
    bgColor: "#000",
  },
  {
    url: "https://tulpan.snelsi.now.sh/",
    img: "cards/Tulpan.jpg",
    title: "Tyulpan - Gorgeous Landing page for the Car Service",
    tags: ["Project"],
    bgColor: "#fff",
  },
  {
    url: "https://smart-canvas.now.sh/",
    img: "cards/smartCanvas.jpg",
    title: "Smart Canvas - Online Interactive Three.js Demo",
    tags: ["Fun"],
    bgColor: "#000",
  },
  {
    url: "https://medspravki.snelsi.vercel.app/",
    img: "cards/Medspravki.jpg",
    title: "Medspravki UA - Nextgen of Medical Certificates",
    tags: ["Project"],
    bgColor: "#fff",
  },
  {
    url: "https://poker.snelsi.now.sh/",
    img: "cards/Poker.jpg",
    title: "Poker game - My Interview Assignment for Artkai",
    tags: ["Game", "Fun"],
    bgColor: "linear-gradient(332.15deg, #0F613C 13.52%, #349963 89.23%)",
  },
  {
    url: "https://tyson-language.now.sh/",
    img: "cards/Tyson.jpg",
    title: "Tyson - Modern and Simple Programming Language",
    tags: ["Project"],
    bgColor: "#000",
  },
  {
    url: "https://dribbble.com/snelsi/collections/2371607-DailyUI",
    img: "cards/DailyUI.jpg",
    title: "Daily UI Dribbble shots pack",
    tags: ["Ongoing"],
    bgColor: "#01142C",
  },
  {
    url: "http://my-dashboard.now.sh/",
    img: "cards/Dashboard.jpg",
    title: "Cool and Basic Project Management Dashboard",
    tags: ["Project"],
    bgColor: "#FAFAFA",
  },
  {
    url: "https://timestamp.snelsi.now.sh/",
    img: "cards/mementoMori.jpg",
    title: "Timestamp - Motivational calendar for procrastinators",
    tags: ["Project"],
    bgColor: "#fff",
  },
  {
    url: "https://hangman.snelsi.now.sh/",
    img: "cards/hangman.jpg",
    title: "Hangman - Can you guess a word?",
    tags: ["Game", "Fun"],
    bgColor: "#5253C6",
  },
  {
    url: "https://gameoflife.snelsi.now.sh/",
    img: "cards/gameOfLife.jpg",
    title: "My implementation of Conway's Game of Life",
    tags: ["Game", "Fun"],
    bgColor: "linear-gradient(60.6deg, #E6E9FA 0.01%, #FFFFFF 49.49%, #EEF1FF 100%)",
  },

  {
    url: "https://hexagons.snelsi.now.sh/",
    img: "cards/hexagons.jpg",
    title: "Dancing Canvas Hexagons",
    tags: ["Fun"],
    bgColor: "#9F8FD6",
  },
  {
    url: "https://party.snelsi.now.sh/",
    img: "cards/reactParty.jpg",
    title: "React Web Sockets Party",
    tags: ["Fun"],
    bgColor: "#000",
  },
  {
    img: "cards/Carshift.jpg",
    title: "Mobile Web App for a Car Rent Company",
    tags: ["Project"],
    bgColor: "#000",
  },
  {
    url: "https://cocomo.now.sh/",
    img: "cards/COCOMO.jpg",
    title: "COCOMO Calculator, made with Ant Design",
    tags: [],
    bgColor: "#E0E0E0",
  },
  {
    url: "https://checkwave.now.sh/",
    img: "cards/checkwave.jpg",
    title: "Checkwave 🌊",
    tags: ["Fun"],
    bgColor: "#fff",
  },
];
