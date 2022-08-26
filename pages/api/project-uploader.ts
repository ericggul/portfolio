import prisma from "lib/prisma";

export default async function handler(req: any, res: any) {
  let { title, shortDescription, longDescription, quoteDescription, projectURL, imageURLs, medium, date, rating, ratingCount } = req.body;
  ratingCount = parseInt(ratingCount);
  rating = parseFloat(rating);
  try {
    const result = await prisma.project.create({
      data: {
        title,
        shortDescription,
        longDescription,
        quoteDescription,
        projectURL,
        imageURLs,
        medium,
        date,
        rating,
        ratingCount,
        land: { connect: { id: "cl6a8c2a400233nbo1zh74z48" } },
      },
    });

    res.status(200).json(result);
  } catch (e) {
    console.log("why!");
    console.log(e);
    res.status(500).json(e);
  }
}
