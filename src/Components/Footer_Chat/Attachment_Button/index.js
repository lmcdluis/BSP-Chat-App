import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col } from "react-bootstrap";
import AttachmentOptions from "./Atachment_Options";
import { useState } from "react";

function AttachmentButton() {
  const [showMenu, setShowMenu] = useState(false);
  const hadleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     console.log(e.target.className);
  //     if (e.target.className !== "attachment-button" && showMenu === true) {
  //       setShowMenu((showMenu) => !showMenu);
  //     }
  //   };

  //   document.body.addEventListener("click", handleClickOutside);
  // }, [showMenu]);

  return (
    <>
      <Col xs={3} lg={3}>
        <Button
          variant="light"
          className="rounded-pill border attachment-button"
          onClick={hadleShowMenu}
        >
          <FontAwesomeIcon
            icon={faPaperclip}
            className={showMenu ? "text-success" : ""}
          />
        </Button>
      </Col>
      <AttachmentOptions isActive={showMenu} />
    </>
  );
}
export default AttachmentButton;
