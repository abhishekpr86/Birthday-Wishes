import Navbar from "../components/Navbar";

function MomentsPage() {
  return (
    <>
      <Navbar />

      <div className="moments-container">
        <h1>📸 Our Beautiful Moments</h1>

        <div className="gallery">

          <div className="photo-card">
            Photo 1
          </div>

          <div className="photo-card">
            Photo 2
          </div>

          <div className="photo-card">
            Photo 3
          </div>

          <div className="photo-card">
            Photo 4
          </div>

        </div>

      </div>
    </>
  );
}

export default MomentsPage;