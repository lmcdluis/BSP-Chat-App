import AvatarMesage from "../Avatar_Message";
import BubbleMesage from "../../Chat_Body/Message_Text_Component/Bubble_Message";

function MessageComponent() {
  return (
    <div className="message-component">
      <AvatarMesage />
      <BubbleMesage />
    </div>
  );
}
export default MessageComponent;
