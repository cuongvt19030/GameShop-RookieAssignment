export const LOGIN = '/login';
export const AUTH = '/authentication/:action';
export const HOME = '/';

export const GAME = '/game';
export const CREATE_GAME = '/game/create';
export const EDIT_GAME = '/game/edit/:id';
export const EDIT_GAME_ID = (id) => `/game/edit/${id}`;

export const GENRE = '/genre';
export const CREATE_GENRE = '/genre/create';
export const EDIT_GENRE = '/genre/edit/:id';
export const EDIT_GENRE_ID = (id) => `/genre/edit/${id}`;

export const UNAUTHORIZE = '/unauthorize';
export const NOTFOUND = '/notfound';