import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter } from '../Data/CharactersData';
import { Character } from '../Data/Types';
import './character-page.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const character = getCharacter(Number(id));
    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, []);

  return (
    <div className="character-info">
      <div className="character-info__image">
        <img src={currentCharacter?.image} alt={currentCharacter?.name} />
      </div>
      <div className="character-info__wrapper">
        <p className="character-info__text">
          Fullname:
          {' '}
          {currentCharacter?.name}
        </p>
        <p className="character-info__text">
          Status:
          {' '}
          {currentCharacter?.status}
        </p>
        <p className="character-info__text">
          Species:
          {' '}
          {currentCharacter?.species}
        </p>
        <p className="character-info__text">
          Gender:
          {' '}
          {currentCharacter?.gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterPage;
