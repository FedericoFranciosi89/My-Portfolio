import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './SingleVideo.css';

const SingleVideo = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data.drinks[0]);
        setIsLoading(false);
      });
  }, []);
  const { strDrink, strDrinkThumb, strInstructionsIT, strAlcoholic } = film;
  return (
    <>
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        <div className='container-single'>
          <h1 className='title'>{strDrink}</h1>
          <h3 className='title'>{strAlcoholic}</h3>
          <img
            src={strDrinkThumb}
            alt=''
            className='img'
            style={{ borderRadius: '1rem' }}
          />
          <h5 style={{ textAlign: 'center', marginTop: '2rem' }}>
            {strInstructionsIT}
          </h5>
          <div className='container-ingredients'>
            <h4>Ingredienti</h4>
            <ul>
              <li>{film.strIngredient1}</li>
              <li>{film.strIngredient2}</li>
              <li>{film.strIngredient3}</li>
              <li>{film.strIngredient4}</li>
              <li>{film.strIngredient5}</li>
              <li>{film.strIngredient6}</li>
              <li>{film.strIngredient7}</li>
              <li>{film.strIngredient8}</li>
              <li>{film.strIngredient9}</li>
              <li>{film.strIngredient10}</li>
              <li>{film.strIngredient11}</li>
              <li>{film.strIngredient12}</li>
              <li>{film.strIngredient13}</li>
              <li>{film.strIngredient14}</li>
              <li>{film.strIngredient15}</li>
            </ul>
          </div>
          <Link to='/' className='btn single-btn'>
            Back
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleVideo;
