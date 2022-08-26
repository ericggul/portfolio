import { useState, useEffect } from "react";
import { INTERJECTIONS } from "static/interjections";
import { getRandom, getRandomFromArray, getRandomInt } from "utils/functions/getRandom";

const Depth = {
  header: "Depth",
  date: "Jul 2021",
  year: "2021",
  type: "Interactive",
  shortDescription: "Interactive web drawing based on mouse position.",
  longDescription:
    "Verfremdungseffekt: This project is also related to the theme of the 'distancing effect', leading users to reflect their daily habits of positioning the mouse over the web plane, activating their consciousness out of such an unconscious behaviour.",
  lists: [
    {
      title: "Depth 2",
      img: "/assets/images/2Depth/2.png",
      link: "/depth2",
    },
    {
      title: "Depth 3",
      img: "/assets/images/2Depth/3.png",
      link: "/depth3",
    },
    {
      title: "Depth 4",
      img: "/assets/images/2Depth/4.png",
      link: "/depth4",
    },
  ],
};

export default function ProjectUpload() {
  useEffect(() => {
    uploadProjects();
  }, []);

  let target = Depth;

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
      quoteDescription: project.quoteDescription || "Verfremdungseffekt" || getRandomFromArray(INTERJECTIONS),
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
