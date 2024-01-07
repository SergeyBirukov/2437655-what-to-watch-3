import { useEffect } from 'react';
import { useAppDispatch } from './store.ts';
import {
  fetchCommentsAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSimilarFilmsAction,
} from '../store/apiActions.ts';
import {
  useAllFilmsSelector,
  useCommentsSelector,
  useCurrentFilmSelector,
  usePromoFilmSelector,
  useSimilarFilmsSelector,
} from '../store/selectors.ts';

export const useFilms = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  const { data, isLoading, error } = useAllFilmsSelector();
  return { data: data, isLoading, error };
};

export const useFilm = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCurrentFilmSelector();
  return { data: data, isLoading, error };
};

export const usePromoFilm = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const { data, isLoading, error } = usePromoFilmSelector();
  return { data: data, isLoading, error };
};

export const useSimilarFilms = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useSimilarFilmsSelector();
  return { data: data, isLoading, error };
};

export const useComments = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCommentsSelector();
  return { data: data, isLoading, error };
};
