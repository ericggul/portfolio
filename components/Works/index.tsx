"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

//styles
import * as S from "./styles";

export default function Project({ allImages }: any) {
  // Remove artificial sequential loading; render all items and lazy-load when in view
  const images = allImages;

  // compute how many items are above the fold for priority
  const priorityCount = 10; // prioritize roughly first two rows in 5-col layout

  // sequential loading queue with limited concurrency
  const [allowedIndex, setAllowedIndex] = useState(0);
  const loadedFlagsRef = useRef<boolean[]>([]);
  const concurrencyWindow = 3; // allow up to 3 ahead of the last fully loaded index

  const handleItemLoaded = (idx: number) => {
    loadedFlagsRef.current[idx] = true;
    setAllowedIndex((prev) => {
      let next = prev;
      while (loadedFlagsRef.current[next]) {
        next += 1;
      }
      return next;
    });
  };

  const memorisedImages = useMemo(
    () =>
      images.map((el: any, i: number) => (
        <SingleEl
          el={el}
          idx={i}
          key={el.id ?? el.url ?? i}
          priority={i < priorityCount}
          allowedIndex={allowedIndex}
          concurrencyWindow={concurrencyWindow}
          onLoaded={handleItemLoaded}
        />
      )),
    [images, allowedIndex]
  );

  // pinch-to-zoom column control (mobile)
  const [columns, setColumns] = useState(1);
  const pinchState = useRef<{ distance: number | null; columnsAtStart: number } | null>(null);

  const getDistance = (touch1: Touch, touch2: Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.hypot(dx, dy);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const d = getDistance(e.touches[0], e.touches[1]);
      pinchState.current = { distance: d, columnsAtStart: columns };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchState.current?.distance) {
      const d = getDistance(e.touches[0], e.touches[1]);
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

const SingleEl = React.memo(({ el, priority = false, idx, allowedIndex, concurrencyWindow, onLoaded }: any) => {
  const [hovered, setHovered] = useState(false);
  const [showedEl, setShowedEl] = useState<any>(null);
  const [change, setChange] = useState(false);
  const [appear, setAppear] = useState(false);
  const { ref, inView } = useInView();
  const canLoad = inView && idx <= allowedIndex + concurrencyWindow;

  useEffect(() => {
    if (!el) return;
    setChange(true);
    setAppear(false);
    //after 1s, set change to false
    const timeout = setTimeout(() => {
      setChange(false);
      setHovered(false);
      setShowedEl(el);
    }, 300);
    return () => clearTimeout(timeout);
  }, [el]);

  const linkTo = useMemo(() => (showedEl ? showedEl.mdxOrSeperateLink || `/works/${showedEl.id}` : "/works"), [showedEl]);

  return (
    <Link href={linkTo} target={linkTo.includes("http") || linkTo.includes("https") ? "_blank" : undefined}>
      <S.SingleEl
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          opacity: change || !appear ? 0 : 1,
        }}
      >
        {showedEl && canLoad && (
          <>
            {showedEl.url && (
              <Image
                onLoad={() => {
                  setAppear(true);
                  if (typeof idx === "number") onLoaded?.(idx);
                }}
                src={showedEl.url}
                alt={showedEl.title}
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
              <S.Title>{showedEl.title}</S.Title>
              <S.Year>
                <p>{showedEl.type}</p>
                <p>{showedEl.year}</p>
              </S.Year>
            </S.Info>

            <S.OverlayShadow />
          </>
        )}
      </S.SingleEl>
    </Link>
  );
});
