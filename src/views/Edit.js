import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GameForm from '../Components/GameForm';
import { getAGame } from '../api/data/ItemData';

export default function Edit({ userId }) {
  const [editItem, setEditItem] = useState({});
  const { fbKey } = useParams();

  useEffect(() => {
    getAGame(fbKey).then(setEditItem);
  }, []);

  return (
    <div>
      <GameForm obj={editItem} userId={userId} />
    </div>
  );
}

Edit.propTypes = {
  userId: PropTypes.string,
};

Edit.defaultProps = { userId: {} };
