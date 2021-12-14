import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getNotes = (gameId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/notes.json?orderBy="gameId"&equalTo="${gameId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createNote = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/notes.json`, obj)
    .then((response) => {
      axios
        .patch(`${dbURL}/notes/${response.data.name}.json`, {
          noteKey: response.data.name,
        })
        .then(() => getNotes(obj.gameId).then(resolve));
    })
    .catch(reject);
});

const deleteNote = (taco) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/notes/${taco.fireKey}.json`)
    .then(() => resolve(getNotes(taco.gameId)))
    .catch(reject);
});

export { getNotes, createNote, deleteNote };
