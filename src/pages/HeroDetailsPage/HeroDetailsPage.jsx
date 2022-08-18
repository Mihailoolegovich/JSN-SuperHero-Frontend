import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HeroDetailsPage.css';
import {
  NavLink,
  //   Route,
  Routes,
  useParams,
  Link,
} from 'react-router-dom';
import { getHeroesById } from 'redux/heroes/heroesOperations';

export default function HeroDetailsPage() {
  const dispatch = useDispatch();
  const [heroDetail, setHeroDetail] = useState();

  const { id } = useParams();
  const heroesList = useSelector(state => state.heroes.hero);

  useEffect(() => {
    if (heroesList) {
      setHeroDetail(heroesList);
      return;
    }

    dispatch(getHeroesById(id))
      .then(e => setHeroDetail(e.payload.hero))
      .catch(error => {
        console.log(error.message);
      });
  }, [dispatch, heroesList, id]);

  return (
    <>
      {
        heroDetail && (
          <>
            <Link
              to="/hero"
              state={{
                hero: heroDetail,
              }}
              className="update_link"
            >
              <button className="update__btn " type="button">
                Update Hero
              </button>
            </Link>
            <div className="container_about_hero">
              <img
                src={heroDetail.avatar}
                alt={heroDetail.originName}
                className="hero__avatar"
              />
              <div className="about_hero">
                <h3 className="about_hero--title">Nick</h3>
                <p className="about_hero--info">{heroDetail.nickName}</p>

                <h3 className="about_hero--title">Name</h3>
                <p className="about_hero--info">{heroDetail.originName}</p>

                <h3 className="about_hero--title">Origin</h3>
                <p className="about_hero--info">
                  {heroDetail.originDescription}
                </p>

                <h3 className="about_hero--title">Super Powers</h3>
                <p className="about_hero--info">{heroDetail.superPowers}</p>

                <h3 className="about_hero--title">Catchphrase</h3>
                <p className="about_hero--info">{heroDetail.catchPhrase}</p>
              </div>
            </div>

            <hr />

            <NavLink to="gallery">Gallery</NavLink>
            <hr />
            <Routes>
              {/* <Route path="gallery" element={<Gallery filmId={id} />}></Route>/ */}
            </Routes>
          </>
        )
        //  ))
      }
    </>
  );
}
