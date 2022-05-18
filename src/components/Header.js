import React from "react";
import { Button, Container } from "reactstrap";
const Header = ({ mode, setMode }) => {
  return (
    <Container className={"p-4"} fluid>
      <div className="toggle-btn">
        <Button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`btn shadow-none btn-outline-${mode}`}
        >
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </div>
      <h1 className={`pt-5 ${mode}`}>Our Menu</h1>
      <hr />
    </Container>
  );
};

export default Header;
