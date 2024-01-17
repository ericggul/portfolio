"use client"; // Error components must be Client Components

import { useState, useEffect } from "react";
import useRandomInterval from "@/utils/hooks/useRandomInterval";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const [oCount, setOCount] = useState(2);
  //ocount increase randomly
  useRandomInterval(
    () => {
      setOCount((count) => count + Math.ceil(Math.random() * (Math.min(count * 2, 1000) + 10)));
    },
    1,
    1000
  );

  return (
    <div>
      <p
        style={{
          maxWidth: "100vw",
          wordBreak: "break-all",
        }}
      >
        O{"o".repeat(oCount)}ps
      </p>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
