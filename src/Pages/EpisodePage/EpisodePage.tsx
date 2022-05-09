import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEpisode } from '../Data/EpisodesData';
import { Episode } from '../Data/Types';
import './episode-page.scss';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const episode = getEpisode(Number(id));
    if (episode) {
      setCurrentEpisode(episode);
    } else {
      navigate('/episodes');
    }
  });

  return (
    <div className="episode">
      <div className="episode__info">
        <p className="episode__text">
          Episode name:
          {' '}
          {currentEpisode?.name}
        </p>
        <p className="episode__text">
          {currentEpisode?.episode}
        </p>
        <p className="episode__text">
          Date:
          {' '}
          {currentEpisode?.air_date}
        </p>
      </div>
    </div>
  );
};

export default EpisodePage;
