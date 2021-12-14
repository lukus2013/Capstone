import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createGame, updateGame } from '../api/data/ItemData';

const initialState = {
  finalScore: '',
  frameStartedDrinking: '',
  totalDrinks: '',
  uid: '',
};

export default function GameForm({ obj, userId }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.fbKey) {
      setFormInput({
        finalScore: obj.finalScore,
        fbKey: obj.fbKey,
        frameStartedDrinking: obj.frameStartedDrinking,
        totalDrinks: obj.totalDrinks,
        uid: obj.uid,
        date: obj.date,
      });
    }
  }, [obj]);

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
    if (obj.fbKey) {
      updateGame(formInput).then(() => {
        resetForm();
        history.push('/games');
      });
    } else {
      createGame({ ...formInput, uid: userId, date: new Date() }).then(() => {
        resetForm();
        history.push('/games');
      });
    }
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
            {obj.fbKey ? 'Update Game?' : 'Submit Game Form?'}
          </button>
        </div>
      </form>
    </div>
  );
}

GameForm.propTypes = {
  obj: PropTypes.shape({
    finalScore: PropTypes.string,
    fbKey: PropTypes.string,
    frameStartedDrinking: PropTypes.string,
    totalDrinks: PropTypes.string,
    uid: PropTypes.string,
    date: PropTypes.string,
  }),
  userId: PropTypes.string.isRequired,
};

GameForm.defaultProps = {
  obj: {},
};
