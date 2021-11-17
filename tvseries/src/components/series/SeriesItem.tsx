import { FC, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SeriesContext } from "../../contexts/SeriesContext";
import { ISeries } from "../../interfaces/ISeries";
import { SeriesContextType } from "../../types/SeriesContextType";

const SeriesItem: FC<ISeries> = ({ id, name, image, plot, genres }) => {
  const { deleteSeries } = useContext(SeriesContext) as SeriesContextType;

  const removeSeries = () => {
    if (id) {
      deleteSeries(id);
    }
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="pb-3">{genres} </Card.Subtitle>
        <Card.Text>{plot}</Card.Text>
        <Link to={`/series-details/${id}`}>Read more about {name}</Link>
      </Card.Body>
      <Button variant="danger" onClick={removeSeries}>
        Delete
      </Button>
    </Card>
  );
};

export default SeriesItem;
