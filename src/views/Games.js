import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCard from '../Components/GameCard';
import { getGames } from '../api/data/ItemData';

export default function Games({ userId, userName }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getGames(userId).then((cardsArray) => {
      if (isMounted) setGames(cardsArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="games-page">
      <h1 className="text-center">Your Games {userName} </h1>
      <div className="games-container">
        <div className="d-flex flex-wrap">
          {games.map((game) => (
            <GameCard key={game.fbKey} game={game} setGames={setGames} />
          ))}
        </div>
      </div>
    </div>
  );
}

Games.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

Games.defaultProps = { userName: {} };
