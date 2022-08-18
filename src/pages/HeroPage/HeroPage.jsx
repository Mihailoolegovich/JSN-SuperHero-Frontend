import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './HeroPage.css';
import { postHeroes } from 'redux/heroes/heroesOperations';
import { patchHero } from 'redux/heroes/heroesOperations';
import { toastSuccess, toastInfo } from 'components/ToastAlert/ToastAlert';

const modelState = {
  nickName: '',
  originName: '',
  originDescription: '',
  superPowers: '',
  catchPhrase: '',
};

const modelForm = [
  'nickName',
  'originName',
  'originDescription',
  'superPowers',
  'catchPhrase',
];
export default function ContactsPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [heroInfo, setHeroInfo] = useState(modelState);
  const [updateActive, setUpdateActive] = useState(false);

  useEffect(() => {
    if (!location.state) {
      return;
    }

    let hero = location.state.hero;
    setHeroInfo({ ...hero });
    setUpdateActive(true);
  }, [location.state]);

  function addInputValue(name) {
    for (let key in heroInfo) {
      if (key === name) {
        return heroInfo[key];
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    setHeroInfo(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (updateActive) {
      dispatch(patchHero(heroInfo))
        .then(navigate(`/hero/${heroInfo._id}`))
        .then(toastInfo('Hero updated'));
      return;
    }

    dispatch(
      postHeroes({
        ...heroInfo,
        avatar:
          'https://novi-vorota.com.ua/catalog/view/theme/novivorota/images/notfound.png',
      })
    ).then(toastSuccess('New hero is created'));

    document.getElementById('create-form').reset();
    setHeroInfo(modelState);
  }
  return (
    <>
      <form
        id="create-form"
        className="container__form"
        onSubmit={handleSubmit}
      >
        {modelForm.map(el => (
          <>
            <textarea
              onChange={handleChange}
              className={
                el !== 'superPowers'
                  ? 'form__create--input'
                  : 'form__create--input big-input'
              }
              type="text"
              name={el}
              value={addInputValue(el)}
              placeholder={el}
              required
            />
          </>
        ))}

        <button className="update__btn" type="submit" name="button">
          {!updateActive ? 'Add new Hero' : 'Save change'}
        </button>
      </form>
    </>
  );
}
