import axios, { AxiosError } from 'axios';
import { ISeries } from '../interfaces/ISeries';

export const seriesService = (function () {
  const urlToSeriesController = 'https://localhost:5001/series';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllSeries = async () => {
    try {
      const result = await axios.get(urlToSeriesController);
      return result.data as ISeries[];
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
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
      const err = error as AxiosError;
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  return { getAllSeries, postSeries };
})();
