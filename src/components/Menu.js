import React, { useEffect, useState } from "react";
import { Button, CardGroup, Col, Container, Row } from "reactstrap";
import data from "../data/dishes";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => setItems(data), []);

  const handleAllClick = () => {
    setItems(data);
  };

  const handleSnackClick = () => {
    setItems(data.filter((item) => item.type === "snack"));
  };

  const handleSweetClick = () => {
    setItems(data.filter((item) => item.type === "sweet"));
  };
  return (
    <>
      <Container fluid className="selection-button text-center">
        <Button
          onClick={handleAllClick}
          className="btn bg-transparent menu-btn"
        >
          All
        </Button>
        <Button
          onClick={handleSnackClick}
          className="btn bg-transparent menu-btn"
        >
          Snacks
        </Button>
        <Button
          onClick={handleSweetClick}
          className="btn bg-transparent menu-btn"
        >
          Sweets
        </Button>
      </Container>
      <div className="rows">
        <Row>
          <CardGroup>
            {items.map((item) => (
              <Col className="p-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <MenuItem item={item} />
              </Col>
            ))}
          </CardGroup>
        </Row>
      </div>
    </>
  );
};

export default Menu;
