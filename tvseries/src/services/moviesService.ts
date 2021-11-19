import axios from 'axios';
import { IMovies } from '../interfaces/IMovies';

export const moviesService = (function () {
	const urlToSeriesController = 'https://localhost:5001/movies';
	const urlToImageUploadController =
		'https://localhost:5001/ImageUpload/SaveImage';

	const getAllMovies = async () => {
		const result = await axios.get(urlToSeriesController);
		return result.data as IMovies[];
	};

	const postMovies = async (newMovie: IMovies, image: File) => {
		let formData = new FormData();
		formData.append('file', image);

		axios.post(urlToSeriesController, newMovie);
		axios({
			url: urlToImageUploadController,
			method: 'POST',
			data: formData,
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	};

	const deleteMovies = async (id: string) => {
		await axios.delete(`${urlToSeriesController}/${id}`);
	};

	return { getAllMovies, postMovies, deleteMovies };
})();
