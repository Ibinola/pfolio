import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import promptzzImg from "@/public/promptzz.jpeg";
import findTunes from "@/public/find-tunes.jpg";
import bot from "@/public/bot.jpeg";
import scissorImg from "@/public/scissor.jpeg";
import cointrackerImg from "@/public/cointracker.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [] as const;

export const projectsData = [
  {
    title: "find-tunes",
    description:
      "An album finder that lets you find albums from your favorite artists using Spotify's API.",
    tags: ["React", "Next.js", "ShadCN UI", "Tailwind"],
    imageUrl: findTunes,
    link: 'https://find-tunes.netlify.app'
  },
  {
    title: "thatswhatshebot",
    description:
      "Discord bot serving random quotes from the tv-show The Office.",
    tags: ["Python"],
    imageUrl: bot,
    link: 'https://github.com/Ibinola/thatswhatshebot'
  },
  // {
  //   title: "Coin Tracker",
  //   description:
  //     "A web app for tracking crypto prices. It shows the latest prices, price changes and price charts.",
  //   tags: ["React", "Tailwind"],
  //   imageUrl: cointrackerImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Python",
] as const;
