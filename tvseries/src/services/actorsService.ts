import axios, { AxiosError } from 'axios';
import { IActors } from '../interfaces/IActors';

export const actorsService = (function () {
  // Er disse riktige??
  const urlToActorsController = 'https://localhost:5001/actors';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllActors = async () => {
    try {
      const result = await axios.get(urlToActorsController);
      return result.data as IActors[];
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  const postActors = async (newActors: IActors, image: File) => {
    let formData = new FormData();
    formData.append('file', image);

    try {
      axios.post(urlToActorsController, newActors);
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

  return { getAllActors, postActors };
})();
