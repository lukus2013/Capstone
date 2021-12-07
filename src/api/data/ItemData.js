import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getGames = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/games.json?orderBy="uid"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getAGame = (fbKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/games/${fbKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createGame = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/games.json`, object)
    .then((response) => {
      axios
        .patch(`${dbURL}/games/${response.data.name}.json`, {
          fbKey: response.data.name,
        })
        .then(() => getGames().then(resolve));
    })
    .catch(reject);
});

const updateGame = (gameObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/games/${gameObj.fbKey}.json`, gameObj)
    .then(() => getGames(gameObj.uid).then(resolve))
    .catch(reject);
});

const deleteGame = (gameObj) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/games/${gameObj.fbKey}.json`)
    .then(() => getGames(gameObj.uid).then(resolve))
    .catch(reject);
});

export {
  getGames, createGame, deleteGame, getAGame, updateGame,
};
