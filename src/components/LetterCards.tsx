import Anime from "react-anime";

const LetterCards = ({ showEnvelope, showPhotos }) => {
  // String to display in the grid
  const stringToDisplay = [
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

  // Creates the letter cards to populate the grid
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
        <div className="grid grid-cols-5 grid-rows-3 gap-1 my-3 md:grid-cols-5 md:grid-rows-3 md:gap-x-4 md:gap-y-4">
          {strList}
        </div>
      )}
    </>
  );
};

export default LetterCards;
