import { movies } from '../../data.js';
import {
  NEXT_MOVIE,
  PREV_MOVIE,
  ADD_MOVIE_TO_FAVS,
  REMOVE_MOVIE_FROM_FAVS
} from '../actions/index.js';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };

    case PREV_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };

    case ADD_MOVIE_TO_FAVS:
      const currentMovie = state.movies[state.sira];

      const yeniMovies = state.movies.filter(
        (movie) => movie.id !== currentMovie.id
      );

      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: yeniMovies,
        sira:
          state.sira >= yeniMovies.length
            ? yeniMovies.length - 1
            : state.sira,
      };

    case REMOVE_MOVIE_FROM_FAVS:
  const movieToRemove = state.favMovies.find(
    (movie) => movie.id === action.payload
  );

  return {
    ...state,
    favMovies: state.favMovies.filter(
      (movie) => movie.id !== action.payload
    ),
    movies: movieToRemove
      ? [...state.movies, movieToRemove]
      : state.movies,
  };

    default:
      return state;
  }
}
