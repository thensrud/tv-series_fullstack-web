import { FC, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ActorsContext } from "../../contexts/ActorsContext";
import { IActors } from "../../interfaces/IActors";
import { ActorsContextType } from "../../types/ActorsContextType";
//import { IInSeries } from '../../interfaces/IInSeries';

const ActorItem: FC<IActors> = ({
  id,
  name,
  image,
  age,
  country,
  inSeries,
}) => {
  /*const createInSeriesList = () => {
    return inSeries?.map((series: IInSeries, key: number) => {
      return (
        <div key={key}>
          <h5>{series}</h5>
          {
		  // Trenger logikk her for å hente ut bilde av riktig serie fra serie-collection, 
          //som også linker til den seriens side. MEN dette skal være på details-siden, ikke her 
		}
        </div>
      );
    });
  }; 
  */

  const { deleteActor } = useContext(ActorsContext) as ActorsContextType;

  const removeActor = () => {
    alert("Click click");
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
