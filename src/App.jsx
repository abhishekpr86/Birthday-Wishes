import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";
import LetterPage from "./pages/LetterPage";
import MomentsPage from "./pages/MomentsPage";
import WhyYouPage from "./pages/WhyYouPage";
import BalloonPage from "./pages/BalloonPage";
import CakePage from "./pages/CakePage";
import BouquetPage from "./pages/BouquetPage";
import NoPage from "./pages/NoPage";
import StoryAccessPage from "./pages/StoryAccessPage";
import StoryPage from "./pages/StoryPage";
import CelebrationPage from "./pages/CelebrationPage";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/moments" element={<MomentsPage />} />
        <Route path="/why-you" element={<WhyYouPage />} />
        <Route path="/balloons" element={<BalloonPage />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/bouquet" element={<BouquetPage />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/story-access" element={<StoryAccessPage />}/>
        <Route path="/story/:id" element={<StoryPage />}/>
        <Route path="/celebration" element={<CelebrationPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



