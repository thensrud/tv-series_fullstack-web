import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MoviesContext } from '../../contexts/MoviesContext';
import { IGenre } from '../../interfaces/IGenre';
import { IMovies } from '../../interfaces/IMovies';
import { MoviesContextType } from '../../types/MoviesContextType';

const MovieDetails: FC = () => {
	const { id } = useParams();

	const { getMoviesById } = useContext(MoviesContext) as MoviesContextType;
	const [movie, setMovie] = useState<IMovies>();

	useEffect(() => {
		if (id) {
			const _movie = getMoviesById(id);
			setMovie(_movie);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getGenres = () => {
		return movie?.genres?.map((genre: IGenre, key: number) => {
			return <p key={key}>{genre.name}</p>;
		});
	};

	return (
		<section>
			<h3>Name: {movie?.name}</h3>
			<img
				src={`https://localhost:5001/images/${movie?.image}`}
				alt={movie?.name}
				width="400"
			/>
			<article>
				<h4>Plot: {movie?.plot}</h4>
				<h4>Genres: {getGenres()}</h4>
			</article>
		</section>
	);
};

export default MovieDetails;
