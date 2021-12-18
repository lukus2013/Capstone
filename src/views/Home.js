import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Home({ userName }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/games');
  };

  return (
    <div className="home-page">
      <h1 className="text-center">Welcome {userName} </h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          type="button"
          className="home-btn btn-success btn-lg"
          onClick={handleClick}
        >
          Go to Your Games
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {
  userName: PropTypes.string,
};

Home.defaultProps = { userName: {} };
