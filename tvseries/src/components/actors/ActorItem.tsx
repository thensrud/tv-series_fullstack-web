import { FC, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ActorsContext } from "../../contexts/ActorsContext";
import { IActors } from "../../interfaces/IActors";
import { ActorsContextType } from "../../types/ActorsContextType";

const ActorItem: FC<IActors> = ({
  id,
  name,
  image,
  age,
  country,
  inSeries,
}) => {
  const { deleteActor } = useContext(ActorsContext) as ActorsContextType;

  const removeActor = () => {
    if (id) {
      deleteActor(id);
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
        <Link to={`/actors-details/${id}`}>Read more about {name}</Link>
      </Card.Body>

      <Button variant="danger" onClick={removeActor}>
        Delete
      </Button>
    </Card>
  );
};

export default ActorItem;
