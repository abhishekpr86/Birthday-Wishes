import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CakePage() {
  const [blown, setBlown] = useState(false);
  const navigate = useNavigate();

  const blowCandle = () => {
    setBlown(true);

    setTimeout(() => {
      navigate("/bouquet");
    }, 5000);
  };

  return (
    <div className="cake-page">

      <h1>🎂 Blow The Candle, Raksha 🎂</h1>

      <div className="cake-container">

        {!blown && (
          <div
            className="candle-flame"
            onClick={blowCandle}
          >
            🔥
          </div>
        )}

        <div className="cake">
          🎂
        </div>

      </div>

      {blown && (
        <div className="wish-message">
          Close your eyes and make a wish ✨💖
        </div>
      )}

    </div>
  );
}

export default CakePage;