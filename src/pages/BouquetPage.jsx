import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BouquetPage() {

  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => {
      navigate("/story-access");
    }, 6000);

  }, []);

  return (
    <div className="bouquet-page">

      <h1>Your Rose Bouquet 🌹</h1>

      <div className="bouquet">

        💐

      </div>

      <p>
        These flowers can never match your beauty ❤️
      </p>

    </div>
  );
}

export default BouquetPage;
