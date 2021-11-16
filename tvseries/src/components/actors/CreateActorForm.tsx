import { FC, ChangeEvent, useState, useEffect, useContext } from "react";
import { IActors } from "../../interfaces/IActors";
import { IInSeries } from "../../interfaces/IInSeries";
import { Badge, Form, Button, FloatingLabel } from "react-bootstrap";
import { actorsService } from "../../services/actorsService";
import { ActorsContext } from "../../contexts/ActorsContext";
import { ActorsContextType } from "../../types/ActorsContextType";

const CreateActorForm: FC = () => {
  const [newImage, setNewImage] = useState<File>();
  const [newInSeries, setNewInSeries] = useState<IInSeries[]>([]);
  const [newInSeriesName, setNewInSeriesName] = useState<string>("");

  const [newActor, setNewActor] = useState<IActors>({
    name: "",
    age: "",
    country: "",
    image: "",
    inSeries: newInSeries,
  });

  const { saveActor } = useContext(ActorsContext) as ActorsContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case "actorName":
        setNewActor({ ...newActor, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewActor({ ...newActor, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "age":
        setNewActor({ ...newActor, age: value });
        break;
      case "country":
        setNewActor({ ...newActor, country: value });
        break;
      case "inSeries":
        setNewInSeriesName(value);
        break;
      default:
        break;
    }
  };
  const addNewInSeries = () => {
    setNewInSeries([...newInSeries, { name: newInSeriesName }]);
    setNewInSeriesName("");
  };

  useEffect(() => {
    setNewActor({
      ...newActor,
      inSeries: newInSeries,
    });
  }, [newInSeries]);

  const listInSeries = () => {
    return newInSeries.map((inSeries: IInSeries, key: number) => {
      return (
        <Badge className="mx-1" bg="secondary" key={key}>
          {inSeries.name}
        </Badge>
      );
    });
  };

  const postNewActor = () => {
    actorsService.postActors(newActor, newImage as File);
    saveActor(newActor);

    setNewActor({
      name: "",
      age: "",
      country: "",
      image: "",
      inSeries: [],
    });
    setNewInSeries([]);
  };

  return (
    <section>
      {/* Actor name */}
      <FloatingLabel
        className="input-label mb-3"
        label="Actors name"
        controlId="actorName"
      >
        <Form.Control
          onChange={handleChange}
          name="actorName"
          type="text"
          placeholder="Sandra Bullock"
          value={newActor.name}
        />
      </FloatingLabel>

      {/* Age */}
      <FloatingLabel className="input-label mb-3" label="Age">
        <Form.Control
          onChange={handleChange}
          name="age"
          type="text"
          placeholder="35"
          value={newActor.age}
        />
      </FloatingLabel>

      {/* Country */}
      <FloatingLabel className="input-label mb-3" label="Country">
        <Form.Control
          onChange={handleChange}
          name="country"
          type="text"
          placeholder="Canada"
          value={newActor.country}
        />
      </FloatingLabel>

      {/* Imange */}
      <Form.Group className="mb-4 mt-3">
        <Form.Label>Actor Image</Form.Label>
        <Form.Control onChange={handleChange} name="image" type="file" />
      </Form.Group>

      {/* In Series */}
      <FloatingLabel className="input-label mb-3" label="Has starred in series">
        <Form.Control
          onChange={handleChange}
          name="inSeries"
          type="text"
          placeholder="Breaking Bad?"
          value={newInSeriesName}
        />
      </FloatingLabel>

      {/* Add In Series */}
      {newInSeriesName ? (
        <Button
          onClick={addNewInSeries}
          className="my-3"
          variant="secondary"
          type="submit"
        >
          Add this series
        </Button>
      ) : (
        <Button className="my-3" variant="secondary" type="submit" disabled>
          Add this series
        </Button>
      )}

      {/* List all added series */}
      <p className="mt-1">Series added: {listInSeries()}</p>

      {/* Post a new actor */}
      <Button
        className="mt-1"
        onClick={postNewActor}
        type="submit"
        variant="primary"
      >
        Submit new Actor
      </Button>
    </section>
  );
};

export default CreateActorForm;
