import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ userName }) {
  return (
    <>
      <h1 className="text-center">Welcome {userName} </h1>
    </>
  );
}

Home.propTypes = {
  userName: PropTypes.string,
};

Home.defaultProps = { userName: {} };
