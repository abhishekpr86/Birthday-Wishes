import { useNavigate } from "react-router-dom";

function NoPage() {

  const navigate = useNavigate();

  return(

    <div className="no-page">

      <h1>
        🧸 Why Did You Click No ? 🥺
      </h1>

      <div style={{fontSize:"120px"}}>
        🧸💥🧸
      </div>

      <button
        className="yes-btn"
        onClick={() => navigate("/home")}
      >
        Try Again ❤️
      </button>

    </div>

  )

}

export default NoPage;