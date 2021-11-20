import { FC } from "react";
import { Card } from "react-bootstrap";
import { ITrailer } from "../../interfaces/ITrailer";

const TrailerItem: FC<ITrailer> = ({ id, link }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{link}</Card.Title>
        <Card.Subtitle>{link}</Card.Subtitle>
        <Card.Text>{link}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrailerItem;
