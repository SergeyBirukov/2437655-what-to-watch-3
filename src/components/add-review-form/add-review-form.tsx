import { StarRating} from '../star-rating/star-rating';
import { MouseEvent, useCallback, useState } from 'react';
import { postCommentAction } from '../../store/apiActions.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store.ts';
import { appRoutes} from '../../constants';
import { usePathId } from '../../hooks/usePathId.ts';

export type ReviewForm = {
  rating: number;
  comment: string;
};

export const AddReviewForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = usePathId();
  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    rating: 0,
    comment: '',
  });
  const handleChange = useCallback(
    (nextValue: Partial<ReviewForm>) => {
      setReviewForm((prevValue) => prevValue && { ...prevValue, ...nextValue });
    },
    [setReviewForm],
  );

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      dispatch(postCommentAction({ filmId: id, ...reviewForm })).then(
        (result) => {
          if (result.payload) {
            navigate(appRoutes.Film(id));
          }
        },
      );
    },
    [dispatch, reviewForm, id, navigate],
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <StarRating
          onClick={(value: number) => {
            handleChange({
              rating: value,
            });
          }}
        />
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewForm.comment}
            onChange={(e) => {
              handleChange({
                comment: e.target.value,
              });
            }}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
