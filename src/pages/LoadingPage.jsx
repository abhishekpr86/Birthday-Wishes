import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            navigate("/home");
          }, 1500);

          return 100;
        }

        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <h1 className="magic-title">
  ✨ A Magical Surprise ✨
</h1>

      <p>Crafted with love just for you ❤️</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3>{progress}%</h3>
    </div>
  );
}

export default LoadingPage;