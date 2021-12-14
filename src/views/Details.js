import React from 'react';
import { useParams } from 'react-router-dom';
import GameDeets from '../Components/GameDeets';

export default function Details() {
  const { fbKey } = useParams();

  return (
    <div className="details-container">
      <GameDeets fbKey={fbKey} />
    </div>
  );
}
