import AvatarMesage from "../Avatar_Message/index";
import MessageTextComponent from "../Message_Text_Component/index";
import BubbleImage from "../Message_Image_component/index";
import BubbleAudio from "../Message_Audio/index";
import BubbleVideo from "../Message_Video/index";

const BubbleMessage = function ( {tMessage, data} ) {
  return (
    <div className="message-component">
      <AvatarMesage />
      <>{tMessage === "text" && (<MessageTextComponent message={`${data}`}/>)}</>
      <>{tMessage === "image" && (<BubbleImage urImage={data}/>)}</>
      <>{tMessage === "audio" && (<BubbleAudio urlAudio={data}/>)}</>
      <>{tMessage === "video" && (<BubbleVideo urlVideo={data}/>)}</>
    </div>
  );
};
export default BubbleMessage;
