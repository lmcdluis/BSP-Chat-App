import { Container } from "react-bootstrap";
import "./Chat_Body_Styles.css";
import FooterChat from "../Footer_Chat";
import BubbleMessage from "./Bubble_Message/index";
import audio from "../../assets/audio/sample-9s.mp3"

function ChatBody() {
  return (
    <div className="chat-body">
      <Container>
      <BubbleMessage tMessage="image" data="https://loremflickr.com/200/200?random=1"/>
      <BubbleMessage tMessage="text" data="Texto de ejemplo para probar la burbuja de texto de la app"/>
      <BubbleMessage tMessage="audio" data={audio}/>
      <BubbleMessage tMessage="video" data="https://www.w3schools.com/html/mov_bbb.mp4"/>
      </Container>
      <FooterChat />
    </div>
  );
}
export default ChatBody;
