import Navbar from "../components/Navbar";
import FloatingHearts from "../components/FloatingHearts";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
     

      <Navbar />

      
    <Confetti
numberOfPieces={85}
recycle={true}
gravity={0.05}
/>
      <div className="home-container">
        <FloatingHearts />
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