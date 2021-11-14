import { FC, ChangeEvent, useState, useEffect } from "react";
import { seriesService } from "../../services/seriesService";
import { ISeries } from "../../interfaces/ISeries";
import { Badge, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { IGenre } from "../../interfaces/IGenre";
import { IEpisode } from "../../interfaces/IEpisode";

const CreateSeriesForm: FC = () => {
  const [newGenreName, setNewGenreName] = useState("");
  const [newGenre, setNewGenre] = useState<IGenre[]>([]);
  const [newEpisode, setNewEpisode] = useState<IEpisode[]>([]);

  const [newSeries, setNewSeries] = useState<ISeries>({
    name: "",
    image: "",
    genres: newGenre,
    plot: "",
    episodes: newEpisode,
  });

  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    let { value } = event.target;

    switch (name) {
      case "seriesName":
        setNewSeries({ ...newSeries, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewSeries({ ...newSeries, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "genre":
        setNewGenreName(value);
        break;
      case "plot":
        setNewSeries({ ...newSeries, plot: value });
        break;
      case "episodeName":
        break;
    }
  };

  const addNewGenre = () => {
    setNewGenre([...newGenre, { name: newGenreName }]);
  };

  useEffect(() => {
    setNewSeries({ ...newSeries, genres: newGenre });
  }, [newGenre]);

  const listGenres = () => {
    return newGenre.map((genre: IGenre, key: number) => {
      return (
        <Badge className="mx-1" bg="secondary" key={key}>
          {genre.name}
        </Badge>
      );
    });
  };

  const postNewSeries = () => {
    // seriesService.postSeries(newSeries, newImage as File);
    alert(JSON.stringify(newSeries));
  };

  return (
    <>
      {/* Serienavn */}
      <FloatingLabel
        className="input-label"
        controlId="seriesName"
        label="Series name"
      >
        <Form.Control
          onChange={handleChange}
          name="seriesName"
          type="text"
          placeholder="What is the series called?"
        />
      </FloatingLabel>
      {/* Bilde */}
      <Form.Group controlId="seriesImage" className="mb-3 mt-3">
        <Form.Label>Series image</Form.Label>
        <Form.Control onChange={handleChange} name="image" type="file" />
      </Form.Group>
      {/* Sjanger */}
      <FloatingLabel className="input-label" controlId="genre" label="Genre">
        <Form.Control
          onChange={handleChange}
          name="genre"
          type="text"
          placeholder="Horror? Fantasy?"
        />
      </FloatingLabel>
      {/* Legge til sjanger */}
      {newGenreName ? (
        <Button
          onClick={addNewGenre}
          className="my-3"
          variant="secondary"
          type="submit"
        >
          Add this genre
        </Button>
      ) : (
        <Button className="my-3" variant="secondary" type="submit" disabled>
          Add this genre
        </Button>
      )}
      {/* Liste alle sjangre lagt til */}
      <p className="mt-1">Genres added: {listGenres()}</p>
      {/* Poste ny serie */}
      <Button onClick={postNewSeries} variant="primary" type="submit">
        Submit new series
      </Button>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <br />
      <br />
      <br />
      {/* <Form>
				<Form.Group className="mb-3" controlId="seriesName">
					<Form.Label>Series name</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="text"
						name="seriesName"
						placeholder="What is the name of the series?"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="genre">
					<Form.Label>Genre</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="text"
						name="genre"
						placeholder="Horror? Fantasy?"
					/>
				</Form.Group>

				<Button onClick={postNewSeries} variant="primary" type="submit">
					Submit new series
				</Button>
			</Form>

			<section>
				<div>
					<label>Name</label>
					<input
						onChange={handleChange}
						name="seriesName"
						type="text"
						placeholder="E.g. Game of Thrones"
					/>
				</div>
				<div>
					<label>Choose Picture</label>
					<input onChange={handleChange} name="image" type="file" />
				</div>
				<div>
					<label>Genre</label>
					<input
						onChange={handleChange}
						name="genre"
						type="text"
						placeholder="E.g. Fantasy"
					/>
				</div>
				<div>
					<label>Plot</label>
					<input
						onChange={handleChange}
						name="plot"
						type="text"
						placeholder="E.g. Everyone wants to sit on a throne"
					/>
				</div>
				<div>
					<label>Seasons</label>
					<input
						onChange={handleChange}
						name="episodeName"
						type="text"
						placeholder="E.g. 1"
					/>
				</div>

				<input onClick={postNewSeries} type="button" value="Lagre ny serie" />
			</section> */}
    </>
  );
};

export default CreateSeriesForm;
