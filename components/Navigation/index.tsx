"use client";
import React, { useState, useMemo, useEffect, use } from "react";
import useResize from "@/utils/hooks/useResize";
import useRandomInterval from "@/utils/hooks/useRandomInterval";

//styles
import * as S from "./styles";

export default function Navigation({ currTab }: any) {
  return (
    <S.NavContainer>
      <S.Left>Jeanyoon Choi</S.Left>
      <S.Right>
        <S.Tab currTab={currTab === "projects"}>Projects</S.Tab>
        <S.Tab currTab={currTab === "about"}>About</S.Tab>
        <S.Tab currTab={currTab === "texts"}>Contact</S.Tab>
      </S.Right>
    </S.NavContainer>
  );
}
