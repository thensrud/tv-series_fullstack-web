import axios from 'axios';
import { IActors } from '../interfaces/IActors';

export const actorsService = (function () {
  // Er disse riktige??
  const urlToActorsController = 'https://localhost:5001/actors';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllActors = async () => {
    const result = await axios.get(urlToActorsController);
    return result.data as IActors[];
  };

  const postActors = async (newActors: IActors, image: File) => {
    let formData = new FormData();
    formData.append('file', image);

    axios.post(urlToActorsController, newActors);
    axios({
      url: urlToImageUploadController,
      method: 'POST',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  return { getAllActors, postActors };
})();
