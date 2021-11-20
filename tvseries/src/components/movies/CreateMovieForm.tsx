import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Badge, Button, FloatingLabel, Form } from "react-bootstrap";
import { IGenre } from "../../interfaces/IGenre";
import { IMovies } from "../../interfaces/IMovies";
import { moviesService } from "../../services/moviesService";

const CreateMovieForm: FC = () => {
  const [newGenreName, setNewGenreName] = useState<string>("");
  const [newGenre, setNewGenre] = useState<IGenre[]>([]);
  const [newImage, setNewImage] = useState<File>();
  const [newMovie, setNewMovie] = useState<IMovies>({
    name: "",
    image: "",
    genre: newGenre,
    plot: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case "movieName":
        setNewMovie({ ...newMovie, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewMovie({ ...newMovie, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "genre":
        setNewGenreName(value);
        break;
      case "plot":
        setNewMovie({ ...newMovie, plot: value });
        break;
      default:
        break;
    }
  };

  const addNewGenre = () => {
    setNewGenre([...newGenre, { name: newGenreName }]);
    setNewGenreName("");
  };

  useEffect(() => {
    setNewMovie({ ...newMovie, genre: newGenre });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const postNewMovie = () => {
    moviesService.postMovies(newMovie, newImage as File);

    setNewMovie({
      name: "",
      image: "",
      genre: [],
      plot: "",
    });
    setNewGenreName("");
    setNewGenre([]);
  };

  return (
    <div>
      {/* Movie name */}
      <FloatingLabel
        className="input-label"
        controlId="movieName"
        label="Movie name"
      >
        <Form.Control
          onChange={handleChange}
          name="movieName"
          type="text"
          placeholder="Movie name"
          value={newMovie.name}
        />
      </FloatingLabel>

      {/* Image */}
      <Form.Group controlId="movieImage" className="mb-3 mt-3">
        <Form.Label>Movie image</Form.Label>
        <Form.Control onChange={handleChange} name="image" type="file" />
      </Form.Group>

      {/* Plot */}
      <FloatingLabel className="input-label" controlId="plot" label="Plot">
        <Form.Control
          onChange={handleChange}
          className="mb-3"
          as="textarea"
          style={{ height: "100px" }}
          name="plot"
          type="text"
          placeholder="Once upon a time..."
          value={newMovie.plot}
        />
      </FloatingLabel>

      {/* Genre */}
      <FloatingLabel className="input-label" controlId="genre" label="Genre">
        <Form.Control
          onChange={handleChange}
          name="genre"
          type="text"
          placeholder="Horror? Fantasy?"
          value={newGenreName}
        />
      </FloatingLabel>

      {/* Add new genre */}
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

      {/* List all genres added */}
      <p className="mt-1">Genres added: {listGenres()}</p>

      {/* Post new movie */}
      <Button
        className="mt-3"
        onClick={postNewMovie}
        variant="primary"
        type="submit"
      >
        Submit new movie
      </Button>
    </div>
  );
};

export default CreateMovieForm;
