import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAGame } from '../api/data/ItemData';
import { getNotes, createNote } from '../api/data/NotesData';
import NoteCards from './NoteCards';

const initialState = {
  note: '',
};

export default function GameDeets() {
  const [game, setGames] = useState({});
  const [note, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formNote, setFormNote] = useState(initialState);
  const { fbKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getAGame(fbKey).then((noteObj) => {
      if (isMounted) setGames(noteObj);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    getNotes(fbKey).then((notes) => {
      if (isMounted) setNotes(notes);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (method) => {
    if (method === 'addnote') {
      setShowForm(initialState);
    }
  };

  const resetForm = () => {
    setFormNote(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote({ ...formNote, gameId: game.fbKey }).then((notes) => {
      setNotes(notes);
      resetForm();
      setShowForm(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="game" style={{ width: '18rem', margin: '3px' }}>
        <div className="game-body">
          <h5 className="game-date">{game.date}</h5>
          <h5 className="game-score">{game.score}</h5>
          <button
            onClick={() => handleClick('addnote')}
            className="btn btn-info"
            type="button"
          >
            Add a note
          </button>
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <div className="m-3">
                <label htmlFor="note" className="form-label visually-hidden">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="note"
                  rows="3"
                  name="note"
                  value={formNote.note}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-3">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            ''
          )}
          <div className="d-flex flex-wrap">
            {note.map((notes) => (
              <NoteCards key={notes.gameId} noteObj={note} setNote={setNotes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
