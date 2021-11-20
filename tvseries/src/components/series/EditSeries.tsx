import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { SeriesContext } from "../../contexts/SeriesContext";
import { ISeries } from "../../interfaces/ISeries";
import { SeriesContextType } from "../../types/SeriesContextType";

const EditSeries: FC = () => {
  const { id } = useParams();

  const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;

  const [editedSeries, setEditedSeries] = useState<ISeries>({
    name: "",
    plot: "",
  });

  const { editSeries } = useContext(SeriesContext) as SeriesContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case "seriesName":
        setEditedSeries({ ...editedSeries, name: value });
        break;
      case "plot":
        setEditedSeries({ ...editedSeries, plot: value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (id) {
      const _series = getSeriesById(id);
      setEditedSeries(_series);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postEdit = () => {
    editSeries(id, editedSeries);

    console.log(id, editedSeries.name + ":     id    +    editedSeries name");
    console.log(editedSeries.plot + ":   editedSeries plot");

    setEditedSeries({
      name: "",
      plot: "",
    });
  };

  return (
    <section>
      {/* Series name */}
      <FloatingLabel
        className="input-label mb-3"
        label="Series name"
        controlId="seriesName"
      >
        <Form.Control
          onChange={handleChange}
          name="seriesName"
          type="text"
          value={editedSeries.name}
        />
      </FloatingLabel>

      {/* Plot */}
      <FloatingLabel className="input-label mb-3" label="Plot">
        <Form.Control
          onChange={handleChange}
          name="plot"
          type="text"
          value={editedSeries.plot}
        />
      </FloatingLabel>

      {/* Update(Put) the edited series */}
      <Button
        className="mt-1"
        onClick={postEdit}
        type="submit"
        variant="primary"
      >
        Submit edit
      </Button>
    </section>
  );
};

export default EditSeries;
