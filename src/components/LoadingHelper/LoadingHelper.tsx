import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import "./LoadingHelper.scss";

const Loading = () => {
  const ref = useRef<any>(!null);

  useEffect(() => {
    const target = ref.current;
    const string = "Loading";
    if (target) {
      target.innerHTML = "";

      let stringSet = string.split("");

      stringSet.forEach((str, i) => {
        const n = document.createElement("span");
        n.innerText = str;
        n.animate(
          [
            {
              opacity: 0.5,
              filter: `blur(.5rem)`,
            },
            {
              opacity: 1,
              filter: `blur(0rem)`,
              offset: 0.65,
            },
            {
              opacity: 1,
              filter: `blur(0rem)`,
            },
          ],
          {
            duration: 2000,
            delay: i * 150,
            fill: "backwards",
            direction: "alternate",
            iterations: Infinity,
          }
        );
        target.appendChild(n);
      });
    }
  }, [ref]);
  return <div className="skeleton" ref={ref} />;
};

export default Loading;
