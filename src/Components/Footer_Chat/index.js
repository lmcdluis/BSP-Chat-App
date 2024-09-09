import { Row, Col } from "react-bootstrap";
import AttachmentButton from "./Attachment_Button";
import TextBoxSend from "./Text_Box_Send";

function FooterChat() {
  return (
    <footer className="footer-chat bg-light fixed-bottom">
      <Row>
        <Col xs={2} lg={1}>
          <AttachmentButton />
        </Col>
        <Col lg={11} xs={10}>
          <TextBoxSend />
        </Col>
      </Row>
    </footer>
  );
}
export default FooterChat;
