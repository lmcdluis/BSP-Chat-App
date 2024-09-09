import { Form, Row, Button, Col } from "react-bootstrap";
import { GeneralAssets } from "../../../Context/Assets_App_Context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const TextBoxSend = () => {
  const _screenWidth = useContext(GeneralAssets);

  return (
    <Row>
      <Col>
        <Form className="d-flex">
          <Form.Control
            placeholder="Mensaje"
            type="text"
            className="me-2"
          ></Form.Control>
          <Button variant="primary" title="Enviar mensaje">
            {_screenWidth.widthScreen <= 430 ? (
              <FontAwesomeIcon icon={faPaperPlane} />
            ) : (
              <span>Enviar</span>
            )}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default TextBoxSend;
