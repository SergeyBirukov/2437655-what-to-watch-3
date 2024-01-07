import { useEffect } from 'react';
import { useAppDispatch } from './store.ts';
import {
  fetchCommentsAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchSimilarFilmsAction,
  fetchPromoFilmAction
} from '../store/apiActions.ts';
import {
  useAllFilmsSelector,
  useCommentsSelector,
  useCurrentFilmSelector,
  usePromoFilmSelector,
  useSimilarFilmsSelector
} from '../store/selectors.ts';

export const useFilms = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  const { films, isLoading, error } = useAllFilmsSelector();
  return { films, isLoading, error };
};

export const useFilm = (id?: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(id));
  }, [dispatch, id]);

  const { film, isLoading, error } = useCurrentFilmSelector();
  return { film, isLoading, error };
};

export const usePromoFilm = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const { film, isLoading, error } = usePromoFilmSelector();
  return { film, isLoading, error };
};

export const useSimilarFilms = (id?: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(id));
  }, [dispatch, id]);

  const { films, isLoading, error } = useSimilarFilmsSelector();
  return { films, isLoading, error };
};

export const useComments = (id?: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  const { comments, isLoading, error } = useCommentsSelector();
  return { comments, isLoading, error };
};
