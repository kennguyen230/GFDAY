import Anime, { anime } from "react-anime";

const LetterCards = ({ showEnvelope, showPhotos }) => {
  // String to display in the grid
  const stringToDisplay: string[] = [
    "H",
    "e",
    "l",
    "l",
    "o",
    "d",
    "e",
    "a",
    "r",
    "y",
    "i",
    "l",
    "y",
    "s",
    "m",
  ];

  // Populates each cell of the grid with a letter in the string
  const strList = stringToDisplay.map((letter, index) => (
    <Anime
      easing="easeOutElastic"
      duration={1000}
      scale={[0.5, 0.9]}
      delay={index * 150}
    >
      <div
        key={index}
        className="w-20 h-20 md:w-72 md:h-72 bg-white border drop-shadow-md flex justify-center items-center"
      >
        <h2 className="text-5xl md:text-8xl font-extrabold font-amatic">
          {letter}
        </h2>
      </div>
    </Anime>
  ));
  return (
    <>
      {!showEnvelope && !showPhotos && (
        <div className="grid grid-cols-5 grid-rows-3 gap-1 my-3 md:grid-cols-5 md:grid-rows-3 md:gap-x-7 md:gap-y-7">
          {strList}
        </div>
      )}
    </>
  );
};

export default LetterCards;
