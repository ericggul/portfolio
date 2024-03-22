export default async function generateImage(prompt: any) {
  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        input: { prompt: prompt.prompt, negative_prompt: prompt.negativePrompt, num_outputs: 1, disable_safety_checker: true },
      }),
    });

    if (response.status !== 201) {
      let error = await response.json();
      //raise error
      throw new Error(error.detail);
    }

    const prediction = await response.json();
    console.log("prediction", prediction.urls.get);
    const id = prediction.id;

    const res2 = await fetch("https://api.replicate.com/v1/predictions/" + id, {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const finalRes = await res2.json();
    console.log(JSON.stringify(finalRes), "stringify");

    return finalRes;
  } catch (e) {
    console.log(e);
  }
}
