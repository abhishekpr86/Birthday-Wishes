import Navbar from "../components/Navbar";
import FloatingHearts from "../components/FloatingHearts";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Confetti />

      <Navbar />

      <FloatingHearts />

      <div className="home-container">
        <h1>🎂 Happy Birthday Raksha 🎂</h1>

        <p>Are you excited for what's next? 💖</p>

        <button
className="yes-btn"
onClick={() => navigate("/balloons")}
>
YES ❤️
</button>
 
<button
className="no-btn"
onClick={() => navigate("/no")}
>
NO 😢
</button>
      </div>
    </>
  );
}

export default HomePage;