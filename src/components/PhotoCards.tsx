import Anime, { anime } from "react-anime";
import { useState, useEffect } from "react";

import img1 from "../assets/gfphotos/img1.jpg";
import img2 from "../assets/gfphotos/img2.jpg";
import img3 from "../assets/gfphotos/img3.jpg";
import img4 from "../assets/gfphotos/img4.jpg";
import img5 from "../assets/gfphotos/img5.jpg";
import img6 from "../assets/gfphotos/img6.jpg";
import img7 from "../assets/gfphotos/img7.jpg";
import img8 from "../assets/gfphotos/img8.jpg";
import img9 from "../assets/gfphotos/img9.jpg";
import img10 from "../assets/gfphotos/img10.jpg";
import img11 from "../assets/gfphotos/img11.jpg";
import img12 from "../assets/gfphotos/img12.jpg";
import img13 from "../assets/gfphotos/img13.jpg";
import img14 from "../assets/gfphotos/img14.jpg";
import img15 from "../assets/gfphotos/img15.jpg";
import img16 from "../assets/gfphotos/img16.jpg";
import img17 from "../assets/gfphotos/img17.jpg";
import img18 from "../assets/gfphotos/img18.jpg";
import img19 from "../assets/gfphotos/img19.jpg";
import img20 from "../assets/gfphotos/img20.jpg";
import img21 from "../assets/gfphotos/img21.jpg";
import img22 from "../assets/gfphotos/img22.jpg";
import img23 from "../assets/gfphotos/img23.jpg";
import img24 from "../assets/gfphotos/img24.jpg";
import img25 from "../assets/gfphotos/img25.jpg";
import img26 from "../assets/gfphotos/img26.jpg";
import img27 from "../assets/gfphotos/img27.jpg";
import img28 from "../assets/gfphotos/img28.jpg";
import img29 from "../assets/gfphotos/img29.jpg";
import img30 from "../assets/gfphotos/img30.jpg";
import img31 from "../assets/gfphotos/img31.jpg";

const PhotoCards = ({ showEnvelope, showPhotos }) => {
  // File name of each gf photo
  const photoURLs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img21,
  ];

  // Used to grab 15 random photos from 'gf photo'
  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    if (showPhotos) {
      setPhotosList(getRandomPhotos(15));
    }
  }, [showPhotos]);

  // The random generator of photos
  const getRandomPhotos = (num) => {
    const shuffled = [...photoURLs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const photos = photosList.map((photoURL, index) => (
    <Anime
      easing="easeOutElastic"
      duration={1000}
      scale={[0.5, 0.9]}
      delay={index * 400}
    >
      <div
        key={index}
        className="w-72 h-72 bg-white border drop-shadow-md flex justify-center items-center"
      >
        <img
          src={photoURL}
          alt={`Photo ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </Anime>
  ));
  return (
    <>
      {!showEnvelope && showPhotos && (
        <div className="h-full grid grid-cols-1 gap-1 my-3 md:grid-cols-5 md:grid-rows-3 md:gap-x-7 md:gap-y-7">
          {photos}
        </div>
      )}
    </>
  );
};

export default PhotoCards;
