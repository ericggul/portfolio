import { useState, useEffect } from "react";
import { INTERJECTIONS } from "static/interjections";
import { getRandom, getRandomFromArray, getRandomInt } from "utils/functions/getRandom";

//instructions:
//add Date with month if you remember
//add short/long/quote description if necessary
const Square = {
  header: "Square",
  year: "2021",
  type: "Static",
  lists: [
    {
      title: "Square 1",
      img: "/assets/images/16Square/1.png",
      link: "/square",
    },
    {
      title: "Square 2",
      img: "/assets/images/16Square/2.png",
      link: "/square2",
    },

    {
      title: "Square 5",
      img: "/assets/images/16Square/5.png",
      link: "/square5",
    },
    {
      title: "Square 9",
      img: "/assets/images/16Square/9.png",
      link: "/square9",
    },
    {
      title: "Square 11",
      img: "/assets/images/16Square/11.png",
      link: "/square11",
    },
    {
      title: "Square 12",
      img: "/assets/images/16Square/12.png",
      link: "/square12",
    },
    {
      title: "Persian",
      img: "/assets/images/16Square/persian.png",
      link: "/persian",
    },
    {
      title: "Quadri Square",
      img: "/assets/images/16Square/quadrisquare12.png",
      link: "/quadrisquare12",
    },
  ],
};
export default function ProjectUpload() {
  useEffect(() => {
    uploadProjects();
  }, []);

  let target = Square;

  async function uploadProjects() {
    for (const project of target.lists) {
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
      date: project.date || target.date || "Jan " + target.year || "Jan 2022",
      rating: project.rating || getRandom(3, 3.8).toFixed(2),
      ratingCount: project.ratingCount || getRandomInt(10, 50),
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
