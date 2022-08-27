import { useState, useEffect } from "react";
import { INTERJECTIONS } from "static/interjections";
import { getRandom, getRandomFromArray, getRandomInt } from "utils/functions/getRandom";

//instructions:
//add Date with month if you remember
//add short/long/quote description if necessary
//to do : Straight 105 projects
const Straight = {
  header: "Staight",
  year: "Aug 2021",
  type: "Static",
  shortDescription: "A Texture created by thousands of lines",
  longDescription:
    "A set of thousands of lines in a random position, rotation and colour creates a unique texture out of the two dimensional plane. The position and rotation of each line is not determined fully randomly. Rather, each of their randomness is subject to one of the parent layers, as each parent layer assigns the degree of randomness for each child component.",
  quoteDescription: "Abstractive",
  lists: [
    {
      title: "Straight 22",
      img: "/assets/images/3Straight/22.png",
    },
    {
      title: "Straight 24",
      img: "/assets/images/3Straight/24.png",
    },
    {
      title: "Straight 35",
      img: "/assets/images/3Straight/35.png",
    },
    {
      title: "Straight 60",
      img: "/assets/images/3Straight/60.png",
    },
    {
      title: "Straight 66",
      img: "/assets/images/3Straight/66.png",
    },
    {
      title: "Straight 72",
      img: "/assets/images/3Straight/72.png",
    },
    {
      title: "Straight 74",
      img: "/assets/images/3Straight/74.png",
    },
    {
      title: "Straight 81",
      img: "/assets/images/3Straight/81.png",
    },
    {
      title: "Straight 88",
      img: "/assets/images/3Straight/88.png",
    },
    {
      title: "Straight 90",
      img: "/assets/images/3Straight/90.png",
    },
    {
      title: "Straight 99",
      img: "/assets/images/3Straight/99.png",
    },
    {
      title: "Straight 106",
      img: "/assets/images/3Straight/106.png",
    },
  ],
};

export default function ProjectUpload() {
  useEffect(() => {
    uploadProjects();
  }, []);

  let target = Straight;
  //temporary for Straight

  async function uploadProjects() {
    let list = [];
    for (let i = 1; i <= 105; i++) {
      list.push({
        title: `${i}`,
        img: `/assets/images/3Straight/Straight (${i}).png`,
        date: "Aug 2021",
        rating: getRandom(2, 3),
        ratingCount: getRandomInt(5, 10),
      });
    }

    for (const project of list) {
      uploadSingleProject(project, target);
    }
  }

  async function uploadSingleProject(project: any, target: any) {
    const body = {
      title: project.title,
      shortDescription: project.shortDescription || target.shortDescription || "Web Drawing",
      longDescription: project.longDescription || target.longDescription || "Web Drawing made of blood, toil, tears and sweat.",
      quoteDescription: project.quoteDescription || target.quoteDescription || getRandomFromArray(INTERJECTIONS),
      projectURL: project.link || undefined,
      imageURLs: project.img.split("/images")[1],
      medium: project.medium || "HTML",
      date: project.date || target.date || "Jan" + target.year || "Jan 2022",
      rating: project.rating || getRandom(3, 4).toFixed(2),
      ratingCount: project.ratingCount || getRandomInt(10, 30),
    };
    const res = await fetch(`/api/project-uploader`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(res);
  }

  return <div></div>;
}
