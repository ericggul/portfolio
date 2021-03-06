import { Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8 } from "./Project";

import { Lab1, Lab2, Lab3, Lab4, Lab5, Lab6, Lab7, Lab8, Lab9 } from "./LaboratoryOccupied";

import Lab1Img from "../assets/LaboratoryOccupied/Lab1.png";
import Lab2Img from "../assets/LaboratoryOccupied/Lab2.png";
import Lab3Img from "../assets/LaboratoryOccupied/Lab3.png";
import Lab4Img from "../assets/LaboratoryOccupied/Lab4.png";
import Lab5Img from "../assets/LaboratoryOccupied/Lab5.png";
import Lab6Img from "../assets/LaboratoryOccupied/Lab6.png";
import Lab7Img from "../assets/LaboratoryOccupied/Lab7.png";
import Lab8Img from "../assets/LaboratoryOccupied/Lab8.png";
import Lab9Img from "../assets/LaboratoryOccupied/Lab9.png";

import { Festival1, Festival2, Festival3, Festival4, Festival5, Festival6 } from "./SNUFestival";

import Festival1Img from "../assets/SNUFestival/Festival1.png";
import Festival2Img from "../assets/SNUFestival/Festival2.png";
import Festival3Img from "../assets/SNUFestival/Festival3.png";
import Festival4Img from "../assets/SNUFestival/Festival4.png";
import Festival5Img from "../assets/SNUFestival/Festival5.png";
import Festival6Img from "../assets/SNUFestival/Festival6.jpeg";

import { Trilogy1, Trilogy2, Trilogy3, Trilogy4 } from "./Trilogy";

import Trilogy1Img from "../assets/Trilogy/Trilogy1.png";
import Trilogy2Img from "../assets/Trilogy/Trilogy2.png";
import Trilogy3Img from "../assets/Trilogy/Trilogy3.png";
import Trilogy4Img from "../assets/Trilogy/Trilogy4.png";

import { Lobby1, Lobby2, Lobby3, Lobby4, Lobby5 } from "./Lobby";

import Lobby1Img from "../assets/Lobby/Lobby1.png";
import Lobby2Img from "../assets/Lobby/Lobby2.png";
import Lobby3Img from "../assets/Lobby/Lobby3.png";
import Lobby4Img from "../assets/Lobby/Lobby4.png";
import Lobby5Img from "../assets/Lobby/Lobby5.png";

import { LowerLobby1, LowerLobby2, LowerLobby3, LowerLobby4, LowerLobby5, LowerLobby6 } from "./LowerLobby";

import LowerLobby1Img from "../assets/LowerLobby/LowerLobby1.png";
import LowerLobby2Img from "../assets/LowerLobby/LowerLobby2.jpg";
import LowerLobby3Img from "../assets/LowerLobby/LowerLobby3.png";
import LowerLobby4Img from "../assets/LowerLobby/LowerLobby4.png";
import LowerLobby5Img from "../assets/LowerLobby/LowerLobby5.png";
import LowerLobby6Img from "../assets/LowerLobby/LowerLobby6.jpeg";

import Project1Img from "../assets/Project1.png";
import Project2Img from "../assets/Project2.png";
import Project3Img from "../assets/Project3.png";
import Project4Img from "../assets/Project4.png";
import Project5Img from "../assets/Project5.png";
import Project6Img from "../assets/Project6.png";
import Project7Img from "../assets/Project7.png";
import Project8Img from "../assets/Project8.png";

function preloadImage(url: any) {
  const image = new Image();
  image.src = url;
}

export function LoadImages() {
  [
    Lab1Img,
    Lab2Img,
    Lab3Img,
    Lab4Img,
    Lab5Img,
    Lab6Img,
    Lab7Img,
    Lab8Img,
    Lab9Img,
    Festival1Img,
    Festival2Img,
    Festival3Img,
    Festival4Img,
    Festival5Img,
    Festival6Img,
    Trilogy1Img,
    Trilogy2Img,
    Trilogy3Img,
    Trilogy4Img,
    Lobby1Img,
    Lobby2Img,
    Lobby3Img,
    LowerLobby1Img,
    LowerLobby2Img,
    LowerLobby3Img,
    LowerLobby4Img,
    LowerLobby5Img,
    LowerLobby6Img,
  ].forEach(preloadImage);
}

export const Topics = [
  {
    id: 1,
    name: "Laboratory Occupied",
    description: "HTML Art",
  },
  {
    id: 2,
    name: "SNU Festival",
    description: "Online Festival",
  },
  {
    id: 3,
    name: "Tril.ogy",
    description: "Design and Infographics",
  },
  {
    id: 4,
    name: "Lobby",
    description: "Other Projects",
  },
  {
    id: 5,
    name: "Lower Lobby",
    description: "Toy Projects",
  },
];

export const SemiDescriptions = [
  {
    type: "Individual Project",
    description: "An exploration through iterative randomness, expanding the boundary of web elements.",
    period: "Jul 2021 - (ongoing)",
    stacks: "ReactJS",
  },
  {
    type: "Group Project | ",
    role: "Lead Developer",
    description: "Web Avant-garde to create an unforgettable online 'Festival UX' in the middle of the pandemic.",
    period: "Jun 2021 - Oct 2021",
    stacks: "ReactJS",
  },
  {
    type: "Individual Project",
    description: "3.5 design projects criticizing modern society through philosophy.",
    period: "Mar 2021 - Jun 2021",
    stacks: "Adobe Illustrator, Processing",
  },
  {
    type: "Mixed",
    description: "Set of notable group and individual projects",
    period: "Varies",
  },
  {
    type: "Individual Projects",
    description: "Side projects which illustrate fundamental direction of my practises.",
    period: "Varies",
  },
];

const LaboratoryOccpuied = [
  {
    id: 1,
    image: Lab1Img,
    description: Lab1,
  },
  {
    id: 2,
    image: Lab2Img,
    description: Lab2,
  },
  {
    id: 3,
    image: Lab3Img,
    description: Lab3,
  },
  {
    id: 4,
    image: Lab4Img,
    description: Lab4,
  },
  {
    id: 5,
    image: Lab5Img,
    description: Lab5,
  },
  {
    id: 6,
    image: Lab6Img,
    description: Lab6,
  },
  {
    id: 7,
    image: Lab7Img,
    description: Lab7,
  },
  {
    id: 8,
    image: Lab8Img,
    description: Lab8,
  },
  {
    id: 9,
    image: Lab9Img,
    description: Lab9,
  },
];

const PleaseOpenAConsole = [
  {
    id: 1,
    image: Lab1Img,
    description: Lab1,
  },
];

const SNUFestival = [
  {
    id: 1,
    image: Festival1Img,
    description: Festival1,
  },
  {
    id: 2,
    image: Festival2Img,
    description: Festival2,
  },
  {
    id: 3,
    image: Festival3Img,
    description: Festival3,
  },
  {
    id: 4,
    image: Festival4Img,
    description: Festival4,
  },
  {
    id: 5,
    image: Festival5Img,
    description: Festival5,
  },
  {
    id: 6,
    image: Festival6Img,
    description: Festival6,
  },
];

const Trilogy = [
  {
    id: 1,
    image: Trilogy1Img,
    description: Trilogy1,
  },
  {
    id: 2,
    image: Trilogy2Img,
    description: Trilogy2,
  },
  {
    id: 3,
    image: Trilogy3Img,
    description: Trilogy3,
  },
  {
    id: 4,
    image: Trilogy4Img,
    description: Trilogy4,
  },
];

const Lobby = [
  {
    id: 1,
    image: Lobby1Img,
    description: Lobby1,
  },
  {
    id: 2,
    image: Lobby2Img,
    description: Lobby2,
  },
  {
    id: 3,
    image: Lobby3Img,
    description: Lobby3,
  },
  {
    id: 4,
    image: Lobby4Img,
    description: Lobby4,
  },
  {
    id: 5,
    image: Lobby5Img,
    description: Lobby5,
  },
];

const LowerLobby = [
  {
    id: 1,
    image: LowerLobby1Img,
    description: LowerLobby1,
  },
  {
    id: 2,
    image: LowerLobby2Img,
    description: LowerLobby2,
  },
  {
    id: 3,
    image: LowerLobby3Img,
    description: LowerLobby3,
  },
  {
    id: 4,
    image: LowerLobby4Img,
    description: LowerLobby4,
  },
  {
    id: 5,
    image: LowerLobby5Img,
    description: LowerLobby5,
  },
  {
    id: 6,
    image: LowerLobby6Img,
    description: LowerLobby6,
  },
];

export const OriginalPages = [
  {
    id: 21,
    image: Trilogy1Img,
    description: Trilogy1,
  },
  {
    id: 22,
    image: Trilogy2Img,
    description: Trilogy2,
  },
  {
    id: 23,
    image: Trilogy3Img,
    description: Trilogy3,
  },
  {
    id: 24,
    image: Trilogy4Img,
    description: Trilogy4,
  },
  {
    id: 31,
    image: Lobby1Img,
    description: Lobby1,
  },
  {
    id: 32,
    image: Lobby2Img,
    description: Lobby2,
  },
  {
    id: 33,
    image: Lobby3Img,
    description: Lobby3,
  },
];

export const Normal = [
  {
    id: 1,
    image: Project1Img,
    description: Project1,
  },
  {
    id: 2,
    image: Project2Img,
    description: Project2,
  },
  {
    id: 3,
    image: Project3Img,
    description: Project3,
  },
  {
    id: 4,
    image: Project4Img,
    description: Project4,
  },
  {
    id: 5,
    image: Project5Img,
    description: Project5,
  },
  {
    id: 6,
    image: Project6Img,
    description: Project6,
  },
  {
    id: 7,
    image: Project7Img,
    description: Project7,
  },
  {
    id: 8,
    image: Project8Img,
    description: Project8,
  },
];

export const Projects = [LaboratoryOccpuied, SNUFestival, Trilogy, Lobby, LowerLobby];
