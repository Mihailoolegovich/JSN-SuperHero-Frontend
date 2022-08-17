import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [aboutHeroes, setAboutHeroes] = useState({
    avatar: '',
    nickName: '',
    originName: '',
    originDescription: '',
    superPowers: '',
    catchPhrase: '',
  });
  //   useEffect(() => {
  //     if (loading === true) {
  //       window.localStorage.removeItem('contacts');
  //       return;
  //     }

  //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  //   useEffect(() => {
  //     const filterLowerCase = filterName.toLowerCase();
  //     setFilterData(
  //       contacts.filter(el => el.name.toLowerCase().includes(filterLowerCase))
  //     );
  //   }, [contacts, filterName]);

  //   function deleteContact(contactId) {
  //     setContacts(contacts.filter(contact => contact.id !== contactId));
  //   }

  //   function formSubmitHandler(data) {
  //     if (
  //       contacts.find(el =>
  //         el.name.toLowerCase().includes(data.name.toLowerCase())
  //       )
  //     ) {
  //       return alert(`${data.name} is already in contacts`);
  //     }
  //     setContacts([data, ...contacts]);
  //   }

  //   function filterForm(e) {
  //     setFilterName(e.currentTarget.value);
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    const result = e.currentTarget.file.files;
    console.log('result', result);
    const data = new FormData();
    data.append('file', result);
    console.log('data', data);
    setImages(
      Array.from(result).map(({ name, type }) => ({
        name,
        type,
      }))
    );
    // Object.keys(result).map(key => key);
    // console.log('resultCopy', resultCopy);
    //
  }
  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} enctype="multipart/form-data">
        <div className="form-group">
          <label for="file">File upload</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={event => {
              console.log('event', event.currentTarget.files);
            }}
            className="form-control"
            multiple
          />
          {images ? (
            images.map(picture => (
              <img
                src={picture.name}
                alt={picture.name}
                className="img-thumbnail mt-2"
                height={200}
                width={200}
              />
            ))
          ) : (
            <div></div>
          )}
          {/* {loading ? (
                  <p>loading...</p>
                ) : (
                  <div>
                    {images.map(picture => (
                      <img
                        src={picture}
                        alt={picture}
                        className="img-thumbnail mt-2"
                        height={200}
                        width={200}
                      />
                    ))}
                  </div>
                )} */}
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
};
