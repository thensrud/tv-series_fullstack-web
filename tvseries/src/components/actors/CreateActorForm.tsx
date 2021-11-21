import { FC, ChangeEvent, useState, useEffect, useContext } from 'react';
import { IActors } from '../../interfaces/IActors';
import { IInSeries } from '../../interfaces/IInSeries';
import { Badge, Form, Button, FloatingLabel } from 'react-bootstrap';
import { actorsService } from '../../services/actorsService';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IInMovies } from '../../interfaces/IInMovie';
import PostToast from '../shared/PostToast';
import { setTimeout } from 'timers';

const CreateActorForm: FC = () => {
  const [newImage, setNewImage] = useState<File>();
  const [newInSeries, setNewInSeries] = useState<IInSeries[]>([]);
  const [newInSeriesName, setNewInSeriesName] = useState<string>('');
  const [newInMovies, setNewInMovies] = useState<IInMovies[]>([]);
  const [newInMoviesName, setNewInMoviesName] = useState<string>('');

  const [newActor, setNewActor] = useState<IActors>({
    name: '',
    age: '',
    country: '',
    image: '',
    inSeries: newInSeries,
    inMovies: [],
  });

  const { saveActor } = useContext(ActorsContext) as ActorsContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case 'actorName':
        setNewActor({ ...newActor, name: value });
        break;
      case 'image':
        let { files } = event.target;
        if (files) {
          setNewActor({ ...newActor, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case 'age':
        setNewActor({ ...newActor, age: value });
        break;
      case 'country':
        setNewActor({ ...newActor, country: value });
        break;
      case 'inSeries':
        setNewInSeriesName(value);
        break;
      case 'inMovies':
        setNewInMoviesName(value);
        break;
      default:
        break;
    }
  };
  const addNewInSeries = () => {
    setNewInSeries([...newInSeries, { name: newInSeriesName }]);
    setNewInSeriesName('');
  };

  useEffect(() => {
    setNewActor({
      ...newActor,
      inSeries: newInSeries,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newInSeries]);

  const listInSeries = () => {
    return newInSeries.map((inSeries: IInSeries, key: number) => {
      return (
        <Badge className='mx-1' bg='secondary' key={key}>
          {inSeries.name}
        </Badge>
      );
    });
  };

  const addNewInMovies = () => {
    setNewInMovies([...newInMovies, { name: newInMoviesName }]);
    setNewInMoviesName('');
  };

  useEffect(() => {
    setNewActor({
      ...newActor,
      inMovies: newInMovies,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newInMovies]);

  const listInMovies = () => {
    return newInMovies.map((inMovies: IInMovies, key: number) => {
      return (
        <Badge className='mx-1' bg='secondary' key={key}>
          {inMovies.name}
        </Badge>
      );
    });
  };

  /* Functionality to trigger toast upon uploading */

  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any;
    if (showToast) {
      timeout = setTimeout(() => setShowToast(false), 4000);
    }
    return () => clearTimeout(timeout);
  }, [showToast]);

  const postNewActor = () => {
    actorsService.postActors(newActor, newImage as File);
    saveActor(newActor);

    setNewActor({
      name: '',
      age: '',
      country: '',
      image: '',
      inSeries: [],
      inMovies: [],
    });
    setNewInSeries([]);
    setNewInMovies([]);
    setShowToast(true);
  };

  return (
    <section>
      {/* Actor name */}
      <FloatingLabel
        className='input-label mb-3'
        label='Actors name'
        controlId='actorName'
      >
        <Form.Control
          onChange={handleChange}
          name='actorName'
          type='text'
          placeholder='Sandra Bullock'
          value={newActor.name}
        />
      </FloatingLabel>
      {/* Age */}
      <FloatingLabel className='input-label mb-3' label='Age'>
        <Form.Control
          onChange={handleChange}
          name='age'
          type='text'
          placeholder='35'
          value={newActor.age}
        />
      </FloatingLabel>
      {/* Country */}
      <FloatingLabel className='input-label mb-3' label='Country'>
        <Form.Control
          onChange={handleChange}
          name='country'
          type='text'
          placeholder='Canada'
          value={newActor.country}
        />
      </FloatingLabel>
      {/* Image */}
      <Form.Group className='mb-4 mt-3'>
        <Form.Label>Actor Image</Form.Label>
        <Form.Control onChange={handleChange} name='image' type='file' />
      </Form.Group>
      {/* In Series */}
      <FloatingLabel className='input-label mb-3' label='Has starred in series'>
        <Form.Control
          onChange={handleChange}
          name='inSeries'
          type='text'
          placeholder='Breaking Bad?'
          value={newInSeriesName}
        />
      </FloatingLabel>
      {/* Add In Series */}
      {newInSeriesName ? (
        <Button
          onClick={addNewInSeries}
          className='my-3'
          variant='secondary'
          type='submit'
        >
          Add this series
        </Button>
      ) : (
        <Button className='my-3' variant='secondary' type='submit' disabled>
          Add this series
        </Button>
      )}
      {/* List all added series */}
      <p className='mt-1'>Series added: {listInSeries()}</p>
      {/* In Movies */}
      <FloatingLabel className='input-label mb-3' label='Has starred in movies'>
        <Form.Control
          onChange={handleChange}
          name='inMovies'
          type='text'
          placeholder='Diehard?'
          value={newInMoviesName}
        />
      </FloatingLabel>
      {/* Add In Movies */}
      {newInMoviesName ? (
        <Button
          onClick={addNewInMovies}
          className='my-3'
          variant='secondary'
          type='submit'
        >
          Add this movie
        </Button>
      ) : (
        <Button className='my-3' variant='secondary' type='submit' disabled>
          Add this movie
        </Button>
      )}
      {/* List all added movies */}
      <p className='mt-1'>Movies added: {listInMovies()}</p>
      {/* Post a new actor */}
      <Button
        className='mt-1'
        onClick={postNewActor}
        type='submit'
        variant='primary'
      >
        Submit new Actor
      </Button>
      {showToast && <PostToast />}
    </section>
  );
};

export default CreateActorForm;
