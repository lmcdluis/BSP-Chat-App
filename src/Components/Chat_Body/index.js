import { Container } from "react-bootstrap";
import "./Chat_Body_Styles.css";
import FooterChat from "../Footer_Chat";
import BubbleMessage from "./Bubble_Message/index";

function ChatBody() {
  return (
    <div className="chat-body">
      <Container>
      <BubbleMessage tMessage="image" data="https://loremflickr.com/200/200?random=1"/>
      <BubbleMessage tMessage="text" data="TExto de ejemplo para probar la burbuja de texto de la app"/>
      <BubbleMessage tMessage="audio" data="https://download.samplelib.com/mp3/sample-9s.mp3"/>
      <BubbleMessage tMessage="video" data="https://www.w3schools.com/html/mov_bbb.mp4"/>
      </Container>
      <FooterChat />
    </div>
  );
}
export default ChatBody;
