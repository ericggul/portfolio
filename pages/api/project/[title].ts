import prisma from "lib/prisma";

export default async function handler(req: any, res: any) {
  let { star, ratingCount, rating } = req.body;
  const { title } = req.query;
  ratingCount = parseInt(ratingCount);
  rating = parseFloat(rating);

  try {
    const result = await prisma.project.update({
      where: { title },
      data: {
        ratingCount: ratingCount + 1,
        rating: (ratingCount * rating + star) / (ratingCount + 1),
      },
    });

    res.status(200).json(result);
  } catch (e) {
    console.log("why!");
    console.log(e);
    res.status(500).json(e);
  }
}
