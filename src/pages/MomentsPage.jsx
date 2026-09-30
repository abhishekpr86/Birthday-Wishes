import memories from "../data/memories";
import Navbar from "../components/Navbar";

function MomentsPage() {
  return (
    <>
      <Navbar />
      <div className="moments-page">
      

      <h1>
        📸 Our Beautiful Moments
      </h1>

      <div className="memories-container">

        {memories.map((memory) => (

          <div
            key={memory.id}
            className="memory-card"
          >

            <img src={memory.image} alt={memory.title}/>

           

            

          </div>

        ))}

      </div>

    </div>
    </>
  );
}

export default MomentsPage;