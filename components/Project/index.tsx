"use client";
import { useState, useMemo, useEffect } from "react";
import useResize from "@/utils/hooks/useResize";

import Link from "next/link";
import { useRouter } from "next/navigation";

//
//styles
import * as S from "./styles";
import { toast, Toast } from "loplat-ui";
import { getRandom } from "@/utils/functions/getRandom";

export default function Project({ mappedImages }: any) {
  console.log(mappedImages);
  return <S.Container>Lorem Ipsum</S.Container>;
}
