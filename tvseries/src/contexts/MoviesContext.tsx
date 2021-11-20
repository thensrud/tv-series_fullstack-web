import { createContext, FC, useEffect, useState } from 'react';
import { IMovies } from '../interfaces/IMovies';
import { moviesService } from '../services/moviesService';
import { MoviesContextType } from '../types/MoviesContextType';

export const MoviesContext = createContext<MoviesContextType | null>(null);

export const MoviesProvider: FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    getMoviesFromService();
  }, []);

  const getMoviesFromService = async () => {
    try {
      const result = await moviesService.getAllMovies();
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoviesById = (id: string) => {
    return movies.find((movie) => movie.id === id) as IMovies;
  };

  const deleteMovies = (id: string) => {
    moviesService.deleteMovies(id);
  };

  return (
    <MoviesContext.Provider
      value={{ movies, getMoviesFromService, getMoviesById, deleteMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
