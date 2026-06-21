// Action type sabitlerini ve action creator'larını burada tanımla.
// Örn:
//   export const NEXT = 'NEXT';
//   export const next = () => ({ type: NEXT });

export const NEXT_MOVIE = 'NEXT_MOVIE';
export const PREV_MOVIE = 'PREV_MOVIE';
export const ADD_MOVIE_TO_FAVS = 'ADD_MOVIE_TO_FAVS';
export const REMOVE_MOVIE_FROM_FAVS = 'REMOVE_MOVIE_FROM_FAVS';
export const nextMovie=()=>{
  return {type: NEXT_MOVIE};
}
export const prevMovie=()=>{
  return {type: PREV_MOVIE};
}
export const addMovieToFavs=()=>{
  return {type: ADD_MOVIE_TO_FAVS};
}
export const removeMovieToFavs=(id)=>{
  return {type: REMOVE_MOVIE_FROM_FAVS, payload: id};
}
