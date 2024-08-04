import { useState } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import LetterCards from "./LetterCards";
import PhotoCards from "./PhotoCards";
import CouponCard from "./CouponCard";

import cheeto from "../assets/animals/ginger3.png";
import ski from "../assets/animals/calico.webp";

const PhotoGallery = ({ showEnvelope }) => {
  const [showPhotos, setShowPhotos] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  return (
    <>
      {!showEnvelope && (
        <div className="min-h-screen flex flex-col justify-center items-center">
          {/* Cheeto cat */}
          <AttentionSeeker effect="wobble">
            <div className="flex flex-col justify-center items-center relative">
              <h1 className="absolute font-amatic font-extrabold text-4xl top-0 right-3 md:right-24 md:top-4">
                Pet me!
              </h1>
              <button
                onClick={() => setShowPhotos(!showPhotos)}
                className="m-0 p-0"
              >
                <img src={cheeto} alt="cheeto" className="w-40 md:w-96 mt-10" />
              </button>
            </div>
          </AttentionSeeker>

          <LetterCards showEnvelope={showEnvelope} showPhotos={showPhotos} />

          <PhotoCards showEnvelope={showEnvelope} showPhotos={showPhotos} />

          {/* Ski cat */}
          <AttentionSeeker effect="bounce">
            <div className="flex flex-col justify-center items-center relative">
              {showCoupon && (
                <>
                  <h1 className="absolute font-amatic font-extrabold text-3xl -top-7">
                    ↓ Look down!
                  </h1>
                </>
              )}
              <button onClick={() => setShowCoupon(!showCoupon)}>
                <img src={ski} alt="ski" className="w-36 mb-10 md:w-80" />
              </button>
            </div>
          </AttentionSeeker>

          <CouponCard showCoupon={showCoupon}></CouponCard>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
