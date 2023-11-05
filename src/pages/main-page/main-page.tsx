import {FilmCard, FilmCardProps} from '../../components/film-card/film-card.tsx';
import {Footer} from '../../components/footer/footer.tsx';

export type MainPageProps = {
    promoFilmTitle: string;
    promoFilmGenre: string;
    promoFilmReleaseDate: number;
    promoFilmImage: string;
}

export function MainPage({promoFilmTitle, promoFilmGenre, promoFilmReleaseDate, promoFilmImage} : MainPageProps): JSX.Element {
  const genres: string[] = [
    'All genres',
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids',
    'Family',
    'Romance',
    'Sci-Fi',
    'Thrillers'
  ];
  const filmCards: FilmCardProps[] = [
    {
      image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      title: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    {
      image: 'img/bohemian-rhapsody.jpg',
      title: 'Bohemian Rhapsody',
    },
    {
      image: 'img/macbeth.jpg',
      title: 'Macbeth',
    },
    {
      image: 'img/aviator.jpg',
      title: 'Aviator',
    },
    {
      image: 'img/we-need-to-talk-about-kevin.jpg',
      title: 'We need to talk about Kevin',
    },
    {
      image: 'img/what-we-do-in-the-shadows.jpg',
      title: 'What We Do in the Shadows',
    },
    {
      image: 'img/revenant.jpg',
      title: 'Revenant',
    },
    {
      image: 'img/johnny-english.jpg',
      title: 'Johnny English',
    },
    {
      image: 'img/shutter-island.jpg',
      title: 'Shutter Island',
    },
    {
      image: 'img/pulp-fiction.jpg',
      title: 'Pulp Fiction',
    },
    {
      image: 'img/no-country-for-old-men.jpg',
      title: 'No Country for Old Men',
    },
    {
      image: 'img/snatch.jpg',
      title: 'Snatch',
    },
    {
      image: 'img/moonrise-kingdom.jpg',
      title: 'Moonrise Kingdom',
    },
    {
      image: 'img/seven-years-in-tibet.jpg',
      title: 'Seven Years in Tibet',
    },
    {
      image: 'img/midnight-special.jpg',
      title: 'Midnight Special',
    },
    {
      image: 'img/war-of-the-worlds.jpg',
      title: 'War of the Worlds',
    },
    {
      image: 'img/dardjeeling-limited.jpg',
      title: 'Dardjeeling Limited',
    },
    {
      image: 'img/orlando.jpg',
      title: 'Orlando',
    },
    {
      image: 'img/mindhunter.jpg',
      title: 'Mindhunter',
    },
    {
      image: 'img/midnight-special.jpg',
      title: 'Midnight Special'
    }
  ];
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilmImage} alt={promoFilmTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilmImage} alt={promoFilmTitle} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmReleaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre) => (
              <li className="catalog__genres-item catalog__genres-item--active" key={genre}>
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>))}
          </ul>

          <div className="catalog__films-list">
            {filmCards.map((props) => <FilmCard {...props} key={props.title}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}