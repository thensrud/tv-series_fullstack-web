import { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';
import { SeriesContext } from '../../contexts/SeriesContext';
import { ISeries } from '../../interfaces/ISeries';
import { SeriesContextType } from '../../types/SeriesContextType';

const SeriesItem: FC<ISeries> = ({ id, name, image, plot }) => {
  const { deleteSeries } = useContext(SeriesContext) as SeriesContextType;

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  const removeSeries = () => {
    let confirmResult: boolean = window.confirm(
      `Are you sure you want to delete ${name} from the database?`
    );
    if (id && confirmResult) {
      try {
        deleteSeries(id);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Card>
      <Card.Img
        style={{ height: '300px' }}
        variant='top'
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{plot}</Card.Text>
      </Card.Body>

      <div className='d-grid m-1 gap-1'>
        <Button
          variant='primary'
          onClick={() => handleClick(`/series-details/${id}`)}
        >
          Read more
        </Button>

        <Button variant='outline-danger' onClick={removeSeries}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default SeriesItem;
