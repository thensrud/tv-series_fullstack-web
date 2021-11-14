import axios from 'axios';
import { ISeries } from '../interfaces/ISeries';

export const seriesService = (function () {
  const urlToSeriesController = 'https://localhost:5001/series';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllSeries = async () => {
    const result = await axios.get(urlToSeriesController);
    return result.data as ISeries[];
  };

  const postSeries = async (newSeries: ISeries, image: File) => {
    let formData = new FormData();
    formData.append('file', image);

    axios.post(urlToSeriesController, newSeries);
    axios({
      url: urlToImageUploadController,
      method: 'POST',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  return { getAllSeries, postSeries };
})();
