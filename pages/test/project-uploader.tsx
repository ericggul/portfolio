import { useState, useEffect } from "react";
import { INTERJECTIONS } from "static/interjections";
import { getRandom, getRandomFromArray, getRandomInt } from "utils/functions/getRandom";

const ArtNoveau = {
  header: "Art Noveau",
  year: "2022",
  type: "Static",
  lists: [
    {
      title: "Art Noveau 1",
      img: "/assets/images/1ArtNoveau/1.png",
      link: "/artnoveau1",
    },
    {
      title: "Art Noveau 4",
      img: "/assets/images/1ArtNoveau/4.png",
      link: "/artnoveau4",
    },
    {
      title: "Art Noveau 5",
      img: "/assets/images/1ArtNoveau/5.png",
      link: "/artnoveau5",
    },
    {
      title: "Art Noveau Text 1",
      img: "/assets/images/1ArtNoveau/Text1.png",
      link: "/artnoveautext1",
    },
    {
      title: "Art Noveau Text 3",
      img: "/assets/images/1ArtNoveau/Text3.png",
      link: "/artnoveautext3",
    },
    {
      title: "Art Noveau Text 4",
      img: "/assets/images/1ArtNoveau/Text4.png",
      link: "/artnoveautext4",
    },
  ],
};

export default function ProjectUpload() {
  useEffect(() => {
    uploadProjects();
  }, []);

  let target = ArtNoveau;

  async function uploadProjects() {
    for (const project of target.lists) {
      uploadSingleProject(project, target);
    }
  }

  async function uploadSingleProject(project: any, target: any) {
    const body = {
      title: project.title,
      shortDescription: project.shortDescription || "Web Drawing",
      longDescription: project.longDescription || "Web Drawing made of blood, toil, tears and sweat.",
      quoteDescription: project.quoteDescription || getRandomFromArray(INTERJECTIONS),
      projectURL: project.link || undefined,
      imageURLs: project.img.split("/images")[1],
      medium: project.medium || "HTML",
      date: project.date || "Jan" + target.year || "Jan 2022",
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
