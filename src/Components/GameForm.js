import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createGame } from '../api/data/ItemData';

const initialState = {
  finalScore: '',
  frameStartedDrinking: '',
  totalDrinks: '',
  uid: '',
};

export default function GameForm({ userId }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createGame({ ...formInput, uid: userId, date: new Date() }).then(() => {
      resetForm();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="form-label visually-hidden">userId {userId}</h1>
        <div className="m-3">
          <label htmlFor="finalScore">Final Score</label>
          <input
            type="number"
            className="form-control"
            id="finalScore"
            name="finalScore"
            placeholder="Enter Score"
            value={formInput.finalScore}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="totalDrinks">Total Drinks Consumed</label>
          <input
            type="number"
            className="form-control"
            id="totalDrinks"
            name="totalDrinks"
            placeholder="Enter a Number"
            value={formInput.totalDrinks}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="frameStartedDrinking">
            What Frame did you start Drinking?
          </label>
          <input
            type="number"
            className="form-control"
            id="frameStartedDrinking"
            name="frameStartedDrinking"
            placeholder="Enter a Number"
            value={formInput.frameStartedDrinking}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3">
          <button type="submit" className="btn btn-success">
            Submit Game Form?
          </button>
        </div>
      </form>
    </div>
  );
}

GameForm.propTypes = {
  userId: PropTypes.string.isRequired,
};
