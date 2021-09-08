import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import './styles.css';

const DeleteModal = ({className, questionText, onDelete, btnText}) => {
  return (
    <Popup
      trigger={<button className={className}>{btnText}</button>}
      modal
      nested
    >
      {close => (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete?</h5>
              <button type="button" className="btn-close" onClick={close}/>
            </div>
            <div className="modal-body">
              <p>{questionText}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={close}
              >Dismiss
              </button>
              <button type="button" className="btn btn-primary" onClick={onDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default DeleteModal;

DeleteModal.propTypes = {
  questionText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DeleteModal.defaultProps = {
  className: '',
};
