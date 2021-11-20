import axios from 'axios';
import { ISeries } from '../interfaces/ISeries';

export const seriesService = (function () {
  const urlToSeriesController = 'https://localhost:5001/series';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllSeries = async () => {
    //Catching and logging any exception in context function call
    const result = await axios.get(urlToSeriesController);
    return result.data as ISeries[];
  };

  const postSeries = async (newSeries: ISeries, image: File) => {
    let formData = new FormData();
    formData.append('file', image);
    try {
      axios.post(urlToSeriesController, newSeries);
      axios({
        url: urlToImageUploadController,
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSeries = async (id: string) => {
    try {
      await axios.delete(`${urlToSeriesController}/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const editSeries = (id: string, editSeries: ISeries) => {
    try {
      axios.put(`https://localhost:5001/series/${id}`, editSeries);
    } catch (error) {
      console.error(error);
    }
  };

  return { getAllSeries, postSeries, deleteSeries, editSeries };
})();
