import Envelope from "./components/Envelope";
import PhotoGallery from "./components/PhotoGallery";
import { useState } from "react";

const App = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-[#b7dbda]">
      <Envelope showEnvelope={showEnvelope} setShowEnvelope={setShowEnvelope} />
      <PhotoGallery showEnvelope={showEnvelope}></PhotoGallery>
    </div>
  );
};

export default App;
