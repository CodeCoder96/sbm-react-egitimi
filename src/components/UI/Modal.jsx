import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isShowModal = true, setIsShowModal, title, description }) => {
  if (!isShowModal) {
    return null;
  }

  return createPortal(
    <div className="modal d-block text-danger">
      <div className="modal-dialog z-3">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsShowModal(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsShowModal(false)}
            >
              Ok!
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal-overlay w-100 h-100 bg-primary position-absolute top-0 left-0 opacity-25 z-0"
        onClick={() => setIsShowModal(false)}
      ></div>
    </div>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  isShowModal: PropTypes.bool,
  setIsShowModal: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Modal;
