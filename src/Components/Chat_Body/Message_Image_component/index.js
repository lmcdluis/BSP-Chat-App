import TimeComponent from "../Time_Component/index";

const BubbleImage = ({ urImage }) => {
  return (
    <div className="bubble-image">
      <div className="bubble-image-content bg-primary">
        <img src={urImage}  alt="text example" loading="lazy" decoding="asynchronous"/>
        <TimeComponent/>
      </div>
    </div>
  );
};
export default BubbleImage;

