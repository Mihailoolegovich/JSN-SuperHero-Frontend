import {
  Link,
  useLocation,
  // useNavigate,
  useSearchParams,
} from 'react-router-dom';

export default function ContactsPage() {
  const modelForm = [
    'nickName',
    'originName',
    'originDescription',
    'superPowers',
    'catchPhrase',
  ];

  return (
    <>
      <form
        className="container--form"
        // onSubmit={handleSubmit}
      >
        {modelForm.map(el => (
          <>
            <label className="form__label">
              {/* <MdPermContactCalendar /> */}
              <input
                // onChange={handleChange}
                className="form__input"
                type="text"
                name={el}
                // value={name}
                placeholder={el}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
          </>
        ))}
        {/* <label className="form__label">
          <MdPermContactCalendar />
          <input
            onChange={handleChange}
            className="form__input"
            type="text"
            name="name"
            // value={name}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /> */}
        {/* <img
          src={contactIcon}
          alt="email"
          className="form__input--icon"
          style={{ top: '20%' }}
        /> */}
        {/* <span>
          <svg width="18px" height="18px">
            <use href={require('../../Icons/contact.png')}></use>
          </svg>
        </span> */}
        {/* </label> */}
        <Link
          to={`1212`}
          // state={{
          //   from: location,
          //   label: 'Go back Films',
          // }}
          className="move_link"
        >
          <button className="form__btn " type="submit" name="button">
            Add new Hero
          </button>
        </Link>
      </form>
    </>
  );
}
