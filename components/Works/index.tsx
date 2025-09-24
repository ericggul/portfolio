"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

//styles
import * as S from "./styles";

export default function Project({ projects }: any) {
  // Re-implement the original image generation and sorting logic on the client-side
  const allImages = useMemo(() => {
    if (!projects) return [];
    return projects
      .reduce((acc: any, curr: any) => {
        const imageCount = parseInt(curr.imageNumber, 10) || 0;
        const projectImages = new Array(imageCount).fill(0).map((_, i: number) => ({
          ...curr,
          url: `/assets${curr.imageURLBase}/${i + 1}.webp`,
          imgIdx: i + 1,
          uniqueKey: `${curr.id}-${i + 1}`,
        }));
        return [...acc, ...projectImages];
      }, [])
      .sort((a: any, b: any) => Math.floor(a.imgIdx / a.rating) / a.rating - Math.floor(b.imgIdx / b.rating) / b.rating);
  }, [projects]);

  // compute how many items are above the fold for priority
  const priorityCount = 10; // prioritize roughly first two rows in 5-col layout

  const memorisedImages = useMemo(
    () =>
      allImages.map((el: any, i: number) => (
        <SingleEl el={el} key={el.uniqueKey} priority={i < priorityCount} />
      )),
    [allImages]
  );

  // pinch-to-zoom column control (mobile)
  const [columns, setColumns] = useState(1);
  const pinchState = useRef<{ distance: number | null; columnsAtStart: number } | null>(null);

  type MinimalTouch = { clientX: number; clientY: number };
  const getDistance = (touch1: MinimalTouch, touch2: MinimalTouch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.hypot(dx, dy);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const d = getDistance(e.touches[0] as any, e.touches[1] as any);
      pinchState.current = { distance: d, columnsAtStart: columns };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchState.current?.distance) {
      const d = getDistance(e.touches[0] as any, e.touches[1] as any);
      const scale = d / pinchState.current.distance;
      // Inverted mapping: zoom in (scale>1) -> fewer columns; zoom out (scale<1) -> more columns
      const alpha = 1.2;
      const raw = pinchState.current.columnsAtStart / Math.pow(scale || 1, alpha);
      const mapped = Math.round(Math.min(5, Math.max(1, raw)));
      setColumns(mapped);
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      pinchState.current = null;
    }
  };

  return (
    <S.Container>
      <S.Wrapper $columns={columns} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {memorisedImages}
      </S.Wrapper>
    </S.Container>
  );
}

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.01, ...(options || {}) }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView } as const;
}

const SingleEl = React.memo(({ el, priority = false }: any) => {
  const [hovered, setHovered] = useState(false);
  const [appear, setAppear] = useState(false);
  const { ref, inView } = useInView();

  const linkTo = useMemo(() => (el ? el.mdxOrSeperateLink || `/works/${el.id}` : "/works"), [el]);
  const imageUrl = el.url;

  return (
    <Link href={linkTo} target={linkTo.includes("http") || linkTo.includes("https") ? "_blank" : undefined}>
      <S.SingleEl
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          opacity: !appear ? 0 : 1,
        }}
      >
        {inView && (
          <>
            {imageUrl && (
              <Image
                onLoad={() => setAppear(true)}
                src={imageUrl}
                alt={el.title}
                fill
                priority={priority}
                sizes="(min-width: 769px) 20vw, 100vw"
              />
            )}
            <S.Info
              style={{
                opacity: hovered ? 1 : 0,
              }}
            >
              <S.Title>{el.title}</S.Title>
              <S.Year>
                <p>{el.type}</p>
                <p>{el.year}</p>
              </S.Year>
            </S.Info>

            <S.OverlayShadow />
          </>
        )}
      </S.SingleEl>
    </Link>
  );
});
