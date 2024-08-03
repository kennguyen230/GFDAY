import Anime, { anime } from "react-anime";
import { useState, useEffect } from "react";

const PhotoCards = ({ showEnvelope, showPhotos }) => {
  // File name of each gf photo
  const photoURLs = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg",
    "img16.jpg",
    "img17.jpg",
    "img18.jpg",
    "img19.jpg",
    "img20.jpg",
    "img21.jpg",
    "img22.jpg",
    "img23.jpg",
    "img24.jpg",
    "img25.jpg",
    "img26.jpg",
    "img27.jpg",
    "img28.jpg",
    "img29.jpg",
    "img30.jpg",
    "img31.jpg",
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
          src={`src/assets/gfphotos/${photoURL}`}
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
