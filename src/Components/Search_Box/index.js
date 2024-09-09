import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SelectorAsistant from "../Header/Selector_Asistant";

const SearchBox = () => {
  const [showButton, setShowButton] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");

  const getTextSearch = (e) => {
    const text = e.target.value;
    setPlaceHolder(text);
  };

  const cleanInput = () => {
    setPlaceHolder("");
  };

  useEffect(() => {
    if (placeHolder.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [placeHolder.length, showButton]);
  return (
    <nav className="bg-light py-2">
      <Container>
        <Row>
          <Col lg={9} md={8} xs={12}>
            <div className="searchBox">
              <FontAwesomeIcon icon={faSearch} />
              <Form.Control
                placeholder="Buscar"
                type="text"
                className="w-100"
                onChange={getTextSearch}
                value={placeHolder}
              />
              {showButton && (
                <Button
                  className="btn-close btn-sm"
                  onClick={cleanInput}
                ></Button>
              )}
            </div>
          </Col>
          <Col lg={3} md={4} xs={12}>
            <SelectorAsistant />
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
export default SearchBox;
