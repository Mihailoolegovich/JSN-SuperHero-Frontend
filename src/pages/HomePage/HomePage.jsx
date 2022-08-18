import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { getHeroes } from '../../redux/heroes/heroesOperations';
import { deleteHero } from '../../redux/heroes/heroesOperations';
import deleteIcon from '../../Icons/delete.png';
import { toastError } from 'components/ToastAlert/ToastAlert';

export default function HomePage() {
  const dispatch = useDispatch();

  const [heroesList, setHeroesList] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    dispatch(getHeroes()).then(data => setHeroesList(data.payload.heroes));
  }, [dispatch]);

  const filterList =
    heroesList &&
    heroesList.filter(el =>
      el.nickName.toLowerCase().includes(filterName.toLowerCase())
    );

  function filter(e) {
    setFilterName(e.currentTarget.value);
  }
  function removeHero(heroId) {
    dispatch(deleteHero(heroId))
      .then(setHeroesList(heroesList.filter(el => el._id !== heroId)))
      .then(toastError('Hero Delete'));
  }
  return (
    <>
      <label className="filter__label">
        Find Hero by name
        <input
          className="filter__input"
          type="text"
          name="filter"
          value={filterName}
          required
          onChange={filter}
        />
      </label>{' '}
      <ul className="hero__ContainerList">
        {filterList &&
          filterList.map(hero => (
            <>
              <li className="hero__list">
                <button
                  className="remove__btn "
                  type="button"
                  onClick={() => removeHero(hero._id)}
                >
                  <img
                    src={deleteIcon}
                    alt="delete"
                    className="remove__btn--icon"
                  />
                </button>
                <Link
                  to={`/hero/${hero._id}`}
                  state={{
                    hero,
                  }}
                  style={{ display: 'contents' }}
                >
                  <img
                    src={hero.avatar}
                    alt={hero.nickName}
                    className="hero__avatar"
                  />

                  <p className="hero__nickName">{hero.nickName} </p>
                </Link>
              </li>
            </>
          ))}
      </ul>
    </>
  );
}
