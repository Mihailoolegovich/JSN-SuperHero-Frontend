import React from 'react';

export default function HomePage() {
  return (
    <>
      <label className="filter__label">
        Find contacts by name
        <input
          className="filter__input"
          type="text"
          name="filter"
          // value={filterName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={filter}
        />
      </label>
      <ul>
        <li className="contacts__li">
          <img
            src={require('../Image/welcome.png')}
            alt="Welcome"
            style={{
              width: '50%',
              height: 'auto',
              paddingLeft: '25%',
              margin: '110px auto 0',
            }}
          />

          <p className="contacts__name">name </p>

          <button
            className="contacts__btn"
            type="button"
            // onClick={() => featchDelete(id)}
          >
            Delete
          </button>
        </li>
      </ul>
      {/* <img
        src={require('../Image/welcome.png')}
        alt="Welcome"
        style={{
          width: '50%',
          height: 'auto',
          paddingLeft: '25%',
          margin: '110px auto 0',
        }}
      /> */}
    </>
  );
}
