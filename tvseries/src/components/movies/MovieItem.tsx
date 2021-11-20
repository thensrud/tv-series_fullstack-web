import React, { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';
import { MoviesContext } from '../../contexts/MoviesContext';
import { IMovies } from '../../interfaces/IMovies';
import { MoviesContextType } from '../../types/MoviesContextType';

const MovieItem: FC<IMovies> = ({ id, name, image, plot, genres }) => {
  const { deleteMovies } = useContext(MoviesContext) as MoviesContextType;

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  const removeMovie = () => {
    let confirmResult: boolean = window.confirm(
      `Are you sure you want to delete ${name} from the database?`
    );
    if (id && confirmResult) {
      try {
        deleteMovies(id);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Card>
      <Card.Img
        style={{ height: '250px' }}
        variant='top'
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className='pb-3'>{genres}</Card.Subtitle>
        <Card.Text>{plot}</Card.Text>
      </Card.Body>
      <div className='d-grid m-1 gap-1'>
        <Button
          variant='primary'
          onClick={() => handleClick(`/movies-details/${id}`)}
        >
          Read more
        </Button>
        <Button variant='outline-danger' onClick={removeMovie}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default MovieItem;
