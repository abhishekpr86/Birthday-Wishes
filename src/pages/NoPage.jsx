import { useNavigate } from "react-router-dom";

function NoPage() {

  const navigate = useNavigate();

  return (
    <div className="no-page">

      <div className="broken-heart">
        💔
      </div>

      <h1>
        Wait... You Clicked NO? 🥺
      </h1>

      <p className="no-message">

        My entire birthday surprise is shocked.

        <br /><br />

        The balloons stopped flying 🎈

        <br />

        The cake refused to bake 🎂

        <br />

        The flowers started crying 🌹

        <br />

        And Abhishek's heart has officially crashed 💔

      </p>

      <div className="sad-emoji-row">

        😭 🥺 💔 😭 🥺

      </div>

      <button
        className="retry-btn"
        onClick={() => navigate("/home")}
      >
        Fine... I'll Click YES ❤️
      </button>

    </div>
  );
}

export default NoPage;