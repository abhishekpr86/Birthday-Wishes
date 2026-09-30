import Navbar from "../components/Navbar";

const reasons = [
  "Your smile can make even my worst day better ❤️",
  "You always care for the people you love ❤️",
  "You stood by me even during difficult times ❤️",
  "You believed in us when I was losing hope ❤️",
  "Your kindness makes you different from everyone else ❤️",
  "You never stopped supporting me ❤️",
  "You make ordinary moments feel special ❤️",
  "You taught me patience and understanding ❤️",
  "You are my safe place ❤️",
  "You make me want to become a better person ❤️",
  "Your laugh is one of my favorite sounds ❤️",
  "You understand me even without words ❤️",
  "You make every memory beautiful ❤️",
  "You never gave up on us ❤️",
  "You are both my best friend and my love ❤️",
  "You make me feel at home ❤️",
  "You inspire me every day ❤️",
  "You always stand strong when life gets difficult ❤️",
  "You care deeply for your family ❤️",
  "Your presence makes everything better ❤️",
  "You make my future feel exciting ❤️",
  "Because you are simply YOU ❤️","You never stopped choosing us, even when life became difficult ❤️",
  "You make me excited about every chapter that is still waiting for us ❤️"
];

function WhyYouPage() {
  return (
    <>
      <Navbar />

      <div className="why-container">

        <h1>💕 24 Reasons Why I Love You 💕</h1>

        <p className="why-subtitle">
          Every reason is a little piece of my heart ❤️
        </p>

        <div className="reasons-grid">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card"
            >
              <div className="reason-number">
                {index + 1}
              </div>

              <p>{reason}</p>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default WhyYouPage;