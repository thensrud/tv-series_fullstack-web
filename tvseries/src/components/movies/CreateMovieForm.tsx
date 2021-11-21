import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Badge, Button, FloatingLabel, Form } from 'react-bootstrap';
import { IGenre } from '../../interfaces/IGenre';
import { IMovies } from '../../interfaces/IMovies';
import { moviesService } from '../../services/moviesService';
import { genres } from '../../data/genres';
import PostToast from '../shared/PostToast';

const CreateMovieForm: FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [newGenre, setNewGenre] = useState<IGenre[]>([]);
  const [newImage, setNewImage] = useState<File>();
  const [newMovie, setNewMovie] = useState<IMovies>({
    name: '',
    image: '',
    genre: newGenre,
    plot: '',
  });

  /* Functionality to trigger toast upon uploading */
  useEffect(() => {
    let timeout: any;
    if (showToast) {
      timeout = setTimeout(() => setShowToast(false), 2500);
    }
    return () => clearTimeout(timeout);
  }, [showToast]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = event.target;

    switch (name) {
      case 'movieName':
        setNewMovie({ ...newMovie, name: value });
        break;
      case 'image':
        let { files } = event.target;
        if (files) {
          setNewMovie({ ...newMovie, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case 'Action':
      case 'Adventure':
      case 'Sci-Fi':
      case 'Comedy':
      case 'Romance':
      case 'Horror':
      case 'Thriller':
      case 'Drama':
        if (checked) {
          setNewGenre([...newGenre, { name }]);
        } else if (!checked) {
          const result = newGenre.filter(
            ({ name }) => name !== event.target.name
          );
          setNewGenre(result);
        }
        break;
      case 'plot':
        setNewMovie({ ...newMovie, plot: value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setNewMovie({ ...newMovie, genre: newGenre });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newGenre]);

  const listGenres = () => {
    return newGenre.map((genre: IGenre, key: number) => {
      return (
        <Badge className='mx-1' bg='secondary' key={key}>
          {genre.name}
        </Badge>
      );
    });
  };

  const postNewMovie = () => {
    moviesService.postMovies(newMovie, newImage as File);

    setNewMovie({
      name: '',
      image: '',
      genre: [],
      plot: '',
    });
    setNewGenre([]);
    setShowToast(true);
  };

  const listGenresCheckbox = () => {
    return genres.map((genre, key) => {
      return (
        <Form.Check
          inline
          label={genre.name}
          name={genre.name}
          type='checkbox'
          key={key}
          onChange={handleChange}
        />
      );
    });
  };

  return (
    <div>
      {/* Movie name */}
      <FloatingLabel
        className='input-label'
        controlId='movieName'
        label='Movie name'
      >
        <Form.Control
          onChange={handleChange}
          name='movieName'
          type='text'
          placeholder='Movie name'
          value={newMovie.name}
        />
      </FloatingLabel>

      {/* Image */}
      <Form.Group controlId='movieImage' className='mb-3 mt-3'>
        <Form.Label>Movie image</Form.Label>
        <Form.Control onChange={handleChange} name='image' type='file' />
      </Form.Group>

      {/* Plot */}
      <FloatingLabel className='input-label' controlId='plot' label='Plot'>
        <Form.Control
          onChange={handleChange}
          className='mb-3'
          as='textarea'
          style={{ height: '100px' }}
          name='plot'
          type='text'
          placeholder='Once upon a time...'
          value={newMovie.plot}
        />
      </FloatingLabel>

      {/* Genre */}
      <div className='mb-3'>{listGenresCheckbox()}</div>

      {/* List all genres added */}
      <p className='mt-1'>Genres added: {listGenres()}</p>

      {/* Post new movie */}
      <Button
        className='mt-3'
        onClick={postNewMovie}
        variant='primary'
        type='submit'
      >
        Submit new movie
      </Button>
      {showToast && <PostToast />}
    </div>
  );
};

export default CreateMovieForm;
