import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header_styles.css";
import TitleHeader from "./Title_Header";

function Header() {
  return (
    <>
      <Navbar expand="xs" variant="light" className="border-bottom">
        <Container>
          <Navbar.Brand>
            <TitleHeader />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
