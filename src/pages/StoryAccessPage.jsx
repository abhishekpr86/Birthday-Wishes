import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StoryAccessPage() {

  const [passcode, setPasscode] =
    useState("");

  const navigate = useNavigate();

  const unlockStory = () => {

    if (
      passcode == 7186 
    ) {
      navigate("/story/1");
    }
    else {
      alert(
        "Only Raksha knows the secret ❤️"
      );
    }

  };

  return (
    <div className="story-access-page">

      <div className="access-card">

        <h1>
          🔒 Secret Love Archive
        </h1>

        <p>
          Only Raksha can unlock our story
          ❤️
        </p>

        <input
          type="password"
          placeholder="Enter Passcode"
          value={passcode}
          onChange={(e) =>
            setPasscode(e.target.value)
          }
        />

        <button
          className="yes-btn"
          onClick={unlockStory}
        >
          Unlock Our Story ❤️
        </button>

      </div>

    </div>
  );
}

export default StoryAccessPage;