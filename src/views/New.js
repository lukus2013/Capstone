import React from 'react';
import PropTypes from 'prop-types';
import GameForm from '../Components/GameForm';

export default function New({ userId }) {
  return (
    <>
      <h1 className="text-center">Add a New Game</h1>
      <GameForm userId={userId} />
    </>
  );
}

New.propTypes = {
  userId: PropTypes.string,
};

New.defaultProps = { userId: {} };
