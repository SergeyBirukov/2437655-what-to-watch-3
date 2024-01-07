import { createAction } from '@reduxjs/toolkit';
import {FilmType, FilmListType, SimilarFilmType, CommentType, PromoFilmType} from '../types/film.ts';
import {AuthorizationStatus} from '../types/auth';

export const setGenre = createAction<string>('films/setGenre');

export const setFilms = createAction<Array<FilmListType>>('films/setFilms');

export const setLoadingFilms = createAction<boolean>('films/setLoadingFilms');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus',);

export const setAvatarLink = createAction<string>('user/setAvatarLink');

export const setFilm = createAction<FilmType>('films/setFilm');

export const setLoadingFilm = createAction<boolean>('films/setLoadingFilm');

export const setErrorMessageFilm = createAction<string | undefined>('films/setErrorMessage');

export const setPromoFilm = createAction<PromoFilmType>('films/setPromoFilm');

export const setLoadingPromoFilm = createAction<boolean>('films/setLoadingPromoFilm');

export const setSimilarFilms = createAction<Array<SimilarFilmType>>('films/setSimilarFilms');

export const setLoadingSimilarFilms = createAction<boolean>('films/setLoadingSimilarFilms');

export const setComments = createAction<Array<CommentType>>('films/setComments');

export const setLoadingComments = createAction<boolean>('films/setLoadingComments');
