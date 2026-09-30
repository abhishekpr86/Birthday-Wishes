import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function CelebrationPage() {
  const navigate = useNavigate();

  return (
    <div className="celebration-page">

      <Confetti />

      <div className="celebration-card">

        <h1>🎉 Happy Birthday Raksha ❤️</h1>

        <h2>This Is Not The End...</h2>

        <h3>This Is Only The Beginning ✨</h3>

        <p>
          Thank you for being the most beautiful
          chapter of my life.
        </p>

        <p>
          March 3rd 2019 ♾️ Forever
        </p>

        <div className="celebration-heart">
          ❤️
        </div>

        <div className="celebration-actions">

          <button
            className="celebration-btn"
            onClick={() => navigate("/story/1")}
          >
            📖 Read Our Story Again
          </button>

          <button
            className="celebration-btn"
            onClick={() => navigate("/home")}
          >
            🏠 Back To Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default CelebrationPage;