import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { To, useNavigate, useParams } from 'react-router';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/IActors';
import { ActorsContextType } from '../../types/ActorsContextType';

const EditActor: FC = () => {
  const { id } = useParams();

  const { getActorsById } = useContext(ActorsContext) as ActorsContextType;

  const [editedActor, setEditedActor] = useState<IActors>({
    name: '',
    age: '',
    country: '',
  });

  const { editActor } = useContext(ActorsContext) as ActorsContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case 'actorName':
        setEditedActor({ ...editedActor, name: value });
        break;
      case 'age':
        setEditedActor({ ...editedActor, age: value });
        break;
      case 'country':
        setEditedActor({ ...editedActor, country: value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (id) {
      const _actor = getActorsById(id);
      setEditedActor(_actor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  const postEdit = () => {
    editActor(id, editedActor);

    console.log(id, editedActor.age + ':     id    +    editedActor');
    console.log(editedActor.name + ':   name');
    console.log(editedActor.age + ':   age');
    console.log(editedActor.country + ':   country');
    console.log(editedActor.image + ':   image');
    console.log(editedActor.inSeries?.[0] + ':   inSeries');

    setEditedActor({
      name: '',
      age: '',
      country: '',
    });

    handleClick(`/all-actors`);
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
          value={editedActor.name}
        />
      </FloatingLabel>

      {/* Age */}
      <FloatingLabel className='input-label mb-3' label='Age'>
        <Form.Control
          onChange={handleChange}
          name='age'
          type='text'
          value={editedActor.age}
        />
      </FloatingLabel>

      {/* Country */}
      <FloatingLabel className='input-label mb-3' label='Country'>
        <Form.Control
          onChange={handleChange}
          name='country'
          type='text'
          value={editedActor.country}
        />
      </FloatingLabel>

      {/* Update(Put) the edited actor */}
      <Button
        className='mt-1'
        onClick={postEdit}
        type='submit'
        variant='primary'
      >
        Submit edit
      </Button>
    </section>
  );
};

export default EditActor;
