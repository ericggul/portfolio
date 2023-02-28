//hooks
import { useState, useMemo, useEffect } from "react";
import useResize from "utils/hooks/useResize";

import { DATA } from "./data";

import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";

//styles
import * as S from "./styles";
import styled from "styled-components";

export default function Visualisation() {
  const [displayedText, setDisplayedText] = useState("Behaviour Aesthetics");

  function handleClick(node: any, _: any) {
    console.log(node);
  }

  return (
    <S.Container>
      <ForceGraph3D
        graphData={DATA}
        nodeAutoColorBy="group"
        nodeThreeObject={(node: any) => {
          const sprite = new SpriteText(node.id);
          sprite.color = node.color;
          sprite.textHeight = node.header ? 15 : 7;
          return sprite;
        }}
        nodeRelSize={8}
        nodeOpacity={1}
        linkOpacity={0.3}
        linkWidth={1}
        linkCurvature={1}
        linkCurveRotation={0.5}
        onNodeClick={handleClick}
        onNodeHover={handleClick}
        onNodeRightClick={handleClick}
      />
    </S.Container>
  );
}
