import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import storyParts from "../data/storyParts";

function StoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const story = storyParts.find(
    (item) => item.id === Number(id)
  );

  if (!story) {
    return <h1>Story Not Found</h1>;
  }

  return (
    <div className="story-page">

      <div className="story-card">

        {/* Part Number */}
        <div className="story-part-indicator">
          Part {story.id} of {storyParts.length}
        </div>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-track">
            <div
              className="progress-value"
              style={{
                width: `${
                  (story.id / storyParts.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1>
          {story.title}
        </h1>

        {/* Subtitle */}
        <h3>
          {story.subtitle}
        </h3>

        {/* Story Content */}
        <div className="story-content">
          {story.content}
        </div>

      </div>

      {/* Navigation */}
      <div className="story-navigation">

        {story.id > 1 && (
          <button
            className="story-btn"
            onClick={() =>
              navigate(`/story/${story.id - 1}`)
            }
          >
            ← Previous
          </button>
        )}

        {story.id < storyParts.length ? (
          <button
            className="story-btn"
            onClick={() =>
              navigate(`/story/${story.id + 1}`)
            }
          >
            Next →
          </button>
        ) : (
          <button
            className="story-btn"
            onClick={() =>
              navigate("/celebration")
            }
          >
            Final Surprise ❤️
          </button>
        )}

      </div>

    </div>
  );
}

export default StoryPage;