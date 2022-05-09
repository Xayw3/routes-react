import './characters-page.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Characters, { getCharacters } from '../Data/CharactersData';
import { Character } from '../Data/Types';

const CharactersPage = () => {
  const navigate = useNavigate();
  const [allCharacters, setAllCharacters] = useState<Character[]>();

  useEffect(() => {
    const characters = getCharacters();
    setAllCharacters(characters);
  }, []);

  return (
    <div>
      <div className="characters">
        <ul className="characters__list">
          {
          allCharacters && allCharacters.map((el) => (
            <li className="characters__item">
              <img className="characters__img" src={el.image} alt={el.name} />
              <div className="characters__overlay">
                <button
                  onClick={() => navigate(`/characters/${el.id}`)}
                  className="characters__btn"
                >
                  Check info
                </button>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export default CharactersPage;
