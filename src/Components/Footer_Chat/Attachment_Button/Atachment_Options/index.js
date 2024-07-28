import {
  faClipboard,
  faFile,
  faFileAudio,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
function AttachmentOptions({ isActive }) {
  return (
    <div
      className={
        isActive
          ? "dropdown-attachment-menu active"
          : "dropdown-attachment-menu"
      }
    >
      <Row className="attachment-menu p-2">
        <Col xs={6} className="attach-item text-center p-2">
          <OverlayTrigger
            key="file"
            placement="bottom"
            overlay={
              <Tooltip title="Adjuntar archivo">Adjuntar documento</Tooltip>
            }
          >
            <>
              <FontAwesomeIcon icon={faFile} />
              <div className="mobile-label">
                <small>Documento</small>
              </div>
            </>
          </OverlayTrigger>
        </Col>
        <Col xs={6} className="attach-item text-center p-2">
          <OverlayTrigger
            key="file"
            placement="bottom"
            overlay={<Tooltip title="Adjuntar archivo">Adjuntar audio</Tooltip>}
          >
            <>
              <FontAwesomeIcon icon={faFileAudio} />
              <div className="mobile-label">
                <small>Audio</small>
              </div>
            </>
          </OverlayTrigger>
        </Col>
        <Col xs={6} className="attach-item text-center p-2">
          <OverlayTrigger
            key="file"
            placement="bottom"
            overlay={
              <Tooltip title="Adjuntar archivo">Adjuntar imagen</Tooltip>
            }
          >
            <>
              <FontAwesomeIcon icon={faImage} />
              <div className="mobile-label">
                <small>Imagen</small>
              </div>
            </>
          </OverlayTrigger>
        </Col>
      </Row>
    </div>
  );
}
export default AttachmentOptions;
