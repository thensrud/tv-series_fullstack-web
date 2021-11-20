import axios from 'axios';
import { IActors } from '../interfaces/IActors';

export const actorsService = (function () {
  const urlToActorsController = 'https://localhost:5001/actors';
  const urlToImageUploadController =
    'https://localhost:5001/ImageUpload/SaveImage';

  const getAllActors = async () => {
    //Catching and logging any exception in context function call
    const result = await axios.get(urlToActorsController);
    return result.data as IActors[];
  };

  const postActors = (newActors: IActors, image: File) => {
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
      console.error(error);
    }
  };

  const deleteActor = async (id: any) => {
    try {
      await axios.delete(`${urlToActorsController}/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const editActor = (id: string, editActor: IActors) => {
    try {
      axios.put(`https://localhost:5001/actors/${id}`, editActor);
    } catch (error) {
      console.error(error);
    }
  };

  return { getAllActors, postActors, deleteActor, editActor };
})();
