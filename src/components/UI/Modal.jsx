import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Modal = ({ isShowModal = true, setIsShowModal, title, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    console.log("modal dom'a yüklendi!");
    const id = setInterval(() => {
      i += 1;
      console.log(i);
      setCount(i);
    }, 1000);

    // clean-up function
    return () => {
      console.log("modal dom'dan kaldırıldı!");
      clearInterval(id);
    };
  }, []);

  if (!isShowModal) {
    return null;
  }

  return createPortal(
    <div className="modal d-block">
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
            </button>{" "}
            {count}
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
