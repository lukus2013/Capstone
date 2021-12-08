import React from 'react';
import PropTypes from 'prop-types';
import { deleteGame, getAGame } from '../api/data/ItemData';

export default function GameCard({ game, setGames }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteGame(game).then(setGames);
    } else {
      getAGame(game.fbKey).then();
      console.warn(game);
    }
  };
  return (
    <div className="gameCard">
      <div className="gameCard-body">
        <h5 className="game-card-date">{game.date}</h5>
        <p className="game-card-finalScore">Final Score: {game.finalScore}</p>
        <p className="game-card-frameStartedDrinking">
          Frame You Started Drinking: {game.frameStartedDrinking}
        </p>
        <p className="game-card-totalDrinks">
          Your Total number of Drinks: {game.totalDrinks}
        </p>
      </div>
      <div className="card-buttons">
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
        <button
          onClick={() => handleClick('edit')}
          className="btn btn-primary"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape(PropTypes.obj).isRequired,
  setGames: PropTypes.func.isRequired,
};
