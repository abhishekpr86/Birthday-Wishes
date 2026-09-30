import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BalloonPage() {
  const navigate = useNavigate();

  const balloons = [
    "YOU",
    "ARE",
    "SO",
    "SPECIAL❤️"
  ];

  const [popped, setPopped] = useState([]);

  const handlePop = (index) => {
    if (popped.includes(index)) return;

    const updated = [...popped, index];
    setPopped(updated);

    if (updated.length === 4) {
      setTimeout(() => {
        navigate("/cake");
      }, 3000);
    }
  };

  return (
    <div className="balloon-page">

      <h1>🎈 Pop All Four Balloons 🎈</h1>

      <p className="balloon-subtitle">
        A special message is hidden inside...
      </p>

      <div className="balloon-container">

        {balloons.map((word, index) => (
          <div
            key={index}
            onClick={() => handlePop(index)}
          >
            {!popped.includes(index) ? (
              <div className="balloon">
                🎈
              </div>
            ) : (
              <div className="revealed-word">
                {word}
              </div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default BalloonPage;