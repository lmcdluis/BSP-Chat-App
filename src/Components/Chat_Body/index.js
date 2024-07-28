import { Container } from "react-bootstrap";
import "./Chat_Body_Styles.css";
import MessageComponent from "./Message_Text_Component";
import FooterChat from "../Footer_Chat";
import ImageMessageComponent from "./Message_Image_component/index";

function ChatBody() {
  return (
    <div className="chat-body">
      <Container>
        <MessageComponent />
        <ImageMessageComponent />
      </Container>
      <FooterChat />
    </div>
  );
}
export default ChatBody;
