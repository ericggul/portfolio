import prisma from "@/lib/prisma";

export default async function generateImage(text: string) {
  try {
    // First API call to generate image
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        input: {
          prompt: `Create a beautiful, artistic header image for a blog post about: ${text}`,
          negative_prompt: "text, watermark, low quality, blurry, distorted",
          num_outputs: 1,
          disable_safety_checker: true,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Image generation failed: ${response.statusText}`);
    }

    const prediction = await response.json();
    const id = prediction.id;

    // Poll for the result
    let finalRes;
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        },
      });

      finalRes = await res.json();

      if (finalRes.status === "succeeded") {
        break;
      }

      if (finalRes.status === "failed") {
        throw new Error("Image generation failed");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      attempts++;
    }

    if (!finalRes?.output?.[0]) {
      throw new Error("No image generated");
    }

    return finalRes.output[0];
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
}
