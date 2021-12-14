import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { getGames } from '../api/data/ItemData';
import GameCard from '../Components/GameCard';

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

  const handleChange = (method) => {
    if (method === '100+') {
      getGames(userId)
        .then(games.filter((myGames) => myGames.finalScore > '100'))
        .then(setGames);
    } else if (method === '175+') {
      getGames(userId)
        .then(games.filter((myGames) => myGames.finalScore > '175'))
        .then(setGames);
    } else if (method === '250+') {
      getGames(userId)
        .then(games.filter((myGames) => myGames.finalScore > '250'))
        .then(setGames);
      console.warn(games);
    }
  };

  return (
    <div className="games-page">
      <DropdownButton id="dropdown-basic-button" title="Filter Score">
        <Dropdown.Item onClick={() => handleChange('100+')}>
          Score over 100
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange('175+')}>
          Score over 175
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange('250+')}>
          Score over 250
        </Dropdown.Item>
      </DropdownButton>
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
