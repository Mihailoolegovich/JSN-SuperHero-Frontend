// import { GetMovieDetails } from 'ApiService/ApiService';
// import './MovieDetailsPage.css';
// import ImagTemplate from 'components/ImagTemplate';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  //   Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

export default function HeroDetailsPage() {
  const [film, setFilm] = useState();
  const [error, setError] = useState();
  const [locBack, setLocBack] = useState({});

  //   const { id } = useParams();
  //   const location = useLocation();

  //   useEffect(() => {
  //     if (!location.state) {
  //       return;
  //     }

  //     let host = location.state.from.pathname;
  //     if (location.state.from.search) {
  //       host += location.state.from.search;
  //     }
  //     setLocBack({ hostParam: host, label: location.state.label });
  //   }, [location.state]);

  //   useEffect(() => {
  //     GetMovieDetails(id)
  //       .then(e => setFilm(e))
  //       .catch(error => {
  //         setError(error.message);
  //       });
  //   }, [id]);

  return (
    // <>
    //   <Link to={locBack.hostParam ?? '/'}>
    //     <button type="button" style={{ marginBottom: '15px' }}>
    //       {locBack.label ?? 'Go back'}
    //     </button>
    //   </Link>

    //   {error && (
    //     <h2>
    //       {error}
    //       <br />
    //       Not find film
    //     </h2>
    //   )}

    //   {film && (
    <>
      <div className="container_move">
        {/* <ImagTemplate
          tags={film.original_name}
          path={film.poster_path}
          className={'poster_move'}
        /> */}
        <img
          src={require('../Image/welcome.png')}
          alt="Welcome"
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#6294d9',
          }}
        />
        <div className="about_move">
          <h2>Name</h2>
          <p>originName</p>

          <h3>originDescription</h3>
          <p>originDescription Content</p>

          <h3>superPowers</h3>
          <p>superPowers Content</p>

          <h3>catchPhrase</h3>
          <p>catchPhrase Content</p>
        </div>
      </div>

      <hr />
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <br />
      <NavLink to="reviews">Reviews</NavLink>
      <hr />
      <Suspense fallback={<h1>Loader...</h1>}>
        <Routes>
          {/* <Route path="cast" element={<Cast filmId={id} />}></Route>/
              <Route path="reviews" element={<Reviews filmId={id} />}></Route> */}
        </Routes>
      </Suspense>
    </>
    //   )}
    // </>
  );
}
