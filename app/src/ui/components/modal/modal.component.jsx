import './modal.style.css';
export function Modal({ toggleModal, children }) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
}
