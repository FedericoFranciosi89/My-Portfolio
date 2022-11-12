import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
const Main = () => {
  const [film, setFilm] = useState('');
  const [listFilms, setListFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFilm = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${film}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    setListFilm(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchFilm();
  }, [film]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          placeholder='search a drink'
          className='form-input'
          value={film}
          onChange={(e) => setFilm(e.target.value)}
        />
      </form>
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        <div className='film-list'>
          {listFilms.drinks?.map((film) => {
            const { idDrink, strDrink, strDrinkThumb } = film;
            return (
              <>
                <div className='container' key={idDrink}>
                  <Link to={`/${idDrink}`}>
                    <img src={strDrinkThumb} alt='' className='img' />
                  </Link>
                  <h4 className='title film-title'>{strDrink}</h4>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Main;
