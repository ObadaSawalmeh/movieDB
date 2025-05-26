import { useEffect, useState } from "react";
import { ProgressBar, ProgressContainer } from "./LoadingProgressBar.styles";

// Progress Bar Component
export function LoadingProgressBar({ loading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  }, [loading]);

  if (!loading && progress === 0) return null;

  return (
    <ProgressContainer>
      <ProgressBar progress={progress} />
    </ProgressContainer>
  );
}
