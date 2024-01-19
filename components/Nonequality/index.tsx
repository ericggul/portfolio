"use client";

//styles
import * as S from "./styles";

export default function About() {
  return (
    <S.Container>
      <S.Contents>
        <h1>Jeanyoon Choi</h1>
        <p>
          Jeanyoon Choi (b.1999) is a Korean web artist and creative developer focusing on Multi-Device Web Artworks (MDWA). Putting the interconnection between mobile and screen devices in the core,
          he researches the possibility of reality and physicality induced from a purely digital domain, enabling an immersive dimension which is embedded within the real (Embedded Reality), rather
          than being segmented from the real (Virtual Reality). Thus he focuses on creating a communal experience of physicality which goes beyond the commercialised landscape of current digital
          technologies, triggering a Dionysian experience in Nietzschestic terminology.
        </p>

        <p>
          Coming from an engineering background, Jeanyoon approaches his practice with scepticism towards the Descartian idea, that mathematics can be used as a clear-and-distinct tool to interpret
          the world. He challenges the notion of AI, which generates the new only upon a priori. He believes that we, as humans, should rediscover our own capacity to transcend and go beyond a priori.
        </p>

        <p>
          Drawing inspiration from a diverse range of sources, from Nietzsche to Dadaism, Jeanyoon's works are playful, chaotic, and thought-provoking, challenging us to reconsider our relationship
          with the digital landscape. His works have been exhibited and performed globally around venues such as Ars Electronica (AT), Seoul Arts Centre, Studio Motif, Sogang University (KR), Manuka
          Arts Centre (AU), IRCAM (FR), Hera Gallery (US), IKLECTIK London, Cromwell Place, The Place London, Copeland Gallery, Crypt Gallery, and Feelium Gallery (UK). He also participated in various
          collaboration projects with Google Arts & Culture, NASA JPL, UN COP28, and the Victoria & Albert Museum. He studied BSc Industrial Engineering at Seoul National University (KR), pursued an
          MA in Information Experience Design at the Royal College of Art (UK), and is currently a PhD Candidate at KAIST (Korean Advanced Institute of Science and Technology, KR).
        </p>

        <h1>Education</h1>

        <p>2024 - Onwards PhD, Experience Design Lab (Advisor: Yiyun Kang), Department of Industrial Design, School of Engineering, KAIST, Daejeon, South Korea</p>
        <p>2022 - 2023 MA, Information Experience Design, School of Communication, Royal College of Art, London, United Kingdom</p>
        <p>2018 - 2022 BSc, Industrial Engineering, School of Engineering, Seoul National University, Seoul, South Korea</p>

        <h1>CV</h1>
        <S.CV>
          <a href="/cv/JeanyoonChoi_CV.pdf" download="Jeanyoon Choi CV">
            Download CV
          </a>
        </S.CV>
      </S.Contents>
    </S.Container>
  );
}
