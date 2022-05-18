import React from "react";
import { Button, CardGroup, Col, Container, Row } from "reactstrap";
import data from "../data/dishes";
import MenuItem from "./MenuItem";

const Menu = ({ mode }) => {
  //   console.log(data.map((item) => item.title));
  return (
    <>
      <Container fluid className="selection-button text-center">
        <Button className="btn bg-transparent menu-btn">All</Button>
        <Button className="btn bg-transparent menu-btn">Snacks</Button>
        <Button className="btn bg-transparent menu-btn">Sweets</Button>
      </Container>
      <div className="rows">
        <Row>
          <CardGroup>
            {data.map((item) => (
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
