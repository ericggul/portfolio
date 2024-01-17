"use client";
import Link from "next/link";

//styles
import * as S from "./styles";

export default function About({ currTab }: any) {
  return (
    <S.Container>
      <S.Contents>
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
      </S.Contents>
    </S.Container>
  );
}
