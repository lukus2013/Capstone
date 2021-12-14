import React from 'react';
import PropTypes from 'prop-types';
import { deleteNote } from '../api/data/NotesData';

export default function NoteCards({ noteObj, setNotes }) {
  const deleteNoteObj = () => {
    deleteNote(noteObj).then(setNotes);
  };
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{noteObj.note}</h5>
          <button
            onClick={() => deleteNoteObj()}
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

NoteCards.propTypes = {
  noteObj: PropTypes.shape({
    noteKey: PropTypes.string,
    gameId: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  setNotes: PropTypes.func.isRequired,
};
