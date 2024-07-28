import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TitleHeader() {
  return (
    <div className="d-flex text-secondary justify-content-center align-items-center">
      <FontAwesomeIcon icon={faComment} className="me-2" />
      <h6 className="m-0">Chat AI</h6>
    </div>
  );
}
export default TitleHeader;
