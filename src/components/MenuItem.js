import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const MenuItem = ({ item }) => {
  return (
    <Card className="dish-card">
      <CardImg
        alt="Food image"
        className="card-img"
        src={item.image}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle className="dish-title" tag="h5">
          {item.title}
        </CardTitle>
        <CardSubtitle className="dish-price mb-2" tag="h6">
          {item.price}
        </CardSubtitle>
        <CardText>{item.subtext}</CardText>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
