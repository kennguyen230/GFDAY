import { AttentionSeeker } from "react-awesome-reveal";
const Envelope = ({ showEnvelope, setShowEnvelope }) => {
  return (
    <>
      {showEnvelope && (
        <div className="flex flex-col justify-center items-center gap-3 font-amatic h-screen">
          <AttentionSeeker effect="swing">
            <h3 className="text-3xl font-extrabold">You've got mail!</h3>
          </AttentionSeeker>
          <AttentionSeeker effect="swing">
            <button onClick={() => setShowEnvelope(!showEnvelope)}>
              <img
                src=".\src\assets\envelope.png"
                alt="envelope"
                className="m-0 p-0"
              />
            </button>
          </AttentionSeeker>
        </div>
      )}
    </>
  );
};

export default Envelope;
