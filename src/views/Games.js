import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { getGames } from '../api/data/ItemData';
import GameCard from '../Components/GameCard';

export default function Games({ userId, userName }) {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);

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
      setFilterGames(
        games.filter((myGames) => Number(myGames.finalScore) > 100),
      );
    } else if (method === '175+') {
      setFilterGames(
        games.filter((myGames) => Number(myGames.finalScore) > 175),
      );
    } else if (method === '250+') {
      setFilterGames(
        games.filter((myGames) => Number(myGames.finalScore) > 250),
      );
    } else if (method === 'all') {
      setFilterGames([]);
    }
  };

  return (
    <div className="games-page">
      <h1 className="text-center">Your Games {userName} </h1>
      <DropdownButton
        className="filter-score"
        id="dropdown-basic-button"
        title="Filter Score"
      >
        <Dropdown.Item onClick={() => handleChange('100+')}>
          Score over 100
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange('175+')}>
          Score over 175
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange('250+')}>
          Score over 250
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange('all')}>
          All Scores
        </Dropdown.Item>
      </DropdownButton>
      <div className="games-container">
        <div className="d-flex flex-wrap">
          {filterGames.length
            ? filterGames.map((game) => (
              <GameCard key={game.fbKey} game={game} setGames={setGames} />
            ))
            : games.map((game) => (
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
