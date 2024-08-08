export const TEXT_TO_UPLOAD = {
  title: "Brutal Interface/Naked Interface",
  text: `
Brutal Interface: Visually displays the algorithmic contents/foundations of the interface itself explicitly, showcasing the inner mechanisms 

What’s brutalism: Minimalistic Construction, shows the inner structure

Example with the artwork omega: The initial interface appears organised and natural, but over the course of interaction, the interface diminishes and immerges into chaos, inducing a new visual style where there exists the combination of 0s and 1s instead of the original text - considering that the original output text that user confronts is the result of post-produced texts, brutal interface attempts to show the actual naked mechanisms which exist primitively before this post-processed output. 

Instance:

   let questionText = nextQuestion;


   let analysingText = "Hmmmm...";
   let omegaText = Array.from(nextQuestion, (char) => (char === " " ? " " : "Ω")).join("");


   if (omegaCount < 8) {
     //as it is
   } else if (omegaCount === 8) {
     questionText = "<S.NextQuestion>{questionText}</S.NextQuestion>";
   } else if (omegaCount === 9) {
     questionText = "<S.NextQuestion>isOmega ? omegaText : {questionText}</S.NextQuestion>";
   } else if (omegaCount === 10) {
     questionText = "<S.NextQuestion>uiState === "analysing" ? analysingText : isOmega ? omegaText : {questionText}</S.NextQuestion>";
   } else if (omegaCount === 11) {
     questionText = "<S.NextQuestion>uiState === "analysing" ? analysingText : isOmega ? omegaText : questionText</S.NextQuestion>";
   } else if (omegaCount === 12) {
     questionText = "<S.NextQuestion>uiState === "analysing" ? analysingText : isOmega ? omegaText : {functionArgs.generate_next_conversation.nextConversationMessage} </S.NextQuestion>";
   } else if (omegaCount <= 14) {
     questionText = "<S.NextQuestion>uiState === "analysing" ? analysingText : isOmega ? omegaText : {response.data.functionArgs.generate_next_conversation.nextConversationMessage}</S.NextQuestion>";
   } else {
     questionText = "<S.NextQuestion>uiState === "analysing" ? analysingText : isOmega ? omegaText : {await axios.post("/api/openai/lib/omega/generate-conversation", {
       messages: [SYSTEM, ...messages.slice(-8)],
       mbti: generateCurrentMBTI(mbtiWeight),
       iteration: ARR[iteration % 4],
     }).data.functionArgs.generate_next_conversation.nextConversationMessage} {questionText}</S.NextQuestion>";
   }


   if (omegaCount <= 13) {
     return <S.NextQuestion>{uiState === "analysing" ? analysingText : isOmega ? omegaText : questionText}</S.NextQuestion>;
   } else if (omegaCount === 14) {
     return <S.NextQuestion>{questionText}</S.NextQuestion>;
   } else if (omegaCount <= 15) {
     return <S.NextQuestion>{stringToBit(questionText)}</S.NextQuestion>;
   } else {
     return (
       <S.NextQuestion
         style={{
           lineHeight: "20%",
         }}
       >
         {stringToBit(questionText, true)}
       </S.NextQuestion>
     );
   }

From this code you can read that as the omegaCount increases the content actually disminishes/gets disrupted and shows the naked circumstance that covers the actually mechanism of how the code is derived.

Yet limitations exist with the current approach: 

This is more of a simulation - it does shows the underlying mechanism, but within the process of displaying such explicitly it is a well-explicitly designed one rather than a natural one. 

Inner-structure in Pompidou centre is naturally displayed by reducing/deducting the exterior - same should be the case for the ideal brutal interface. Yet in this case with the omega, it is actually the addition (if-else statement) which aims to explicitly show the inner mechanism, in which it initially aims for showing the inner structure, but ends of faking by showing the simulated inner structure which is actually derived as the result of designed/crafted code to deliver such purpose.

`,
  tags: [
    "Brutal Interface",
    "Naked Interface",
    "Omega",
    "Art",
    "Technology",
    "Algorithm",
    "Interface",
    "Visual",
    "Minimalistic",
    "Construction",
    "Structure",
    "Artwork",
    "Chaos",
    "0s",
    "1s",
    "Text",
    "Output",
    "Post-processed",
    "Mechanism",
    "Primitively",
    "Post-produced",
    "Simulated",
    "Natural",
    "Explicit",
    "Designed",
    "Crafted",
    "Code",
    "Inner-structure",
    "Pompidou Centre",
    "Exterior",
    "Ideal",
    "Addition",
    "If-else statement",
    "Inner mechanism",
    "Inner structure",
    "Simulated inner structure",
    "Designed code",
    "Purpose",
  ],
};
