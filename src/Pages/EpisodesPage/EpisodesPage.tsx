import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes } from '../Data/EpisodesData';
import { Episode } from '../Data/Types';
import './episodes-page.scss';

const EpisodesPage = () => {
  const navigate = useNavigate();
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>();

  useEffect(() => {
    const episodes = getEpisodes();
    setAllEpisodes(episodes);
  }, []);

  return (
    <div className="episodes">
      <ul className="episodes__list">
        {
                allEpisodes && allEpisodes.map((el) => (
                  <li className="episodes__item">
                    <button
                      className="episodes__btn"
                      onClick={() => navigate(`/episodes/${el.id}`)}

                    >
                      {el.name}
                    </button>
                  </li>
                ))
            }
      </ul>
    </div>
  );
};

export default EpisodesPage;
