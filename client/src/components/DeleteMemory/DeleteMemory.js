import { Component } from "react";
import Swal from "sweetalert2";
import "./DeleteMemory.scss";

function Modal({ modal, closeModal, props }) {
  const { userID, memoryID, history, deleteMemoryByUser } = props;
  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your memory has been deleted!",
      showConfirmButton: false,
      timer: 1500,
    });
    deleteMemoryByUser(userID, memoryID);
    closeModal(e);
    history.push(`/profile/${userID}/memories/`);
  };

  return (
    <div
      className={`overlay ${modal ? "overlay--visible" : "overlay--hidden"}
    `}
    >
      <article className="delete-memory">
        <div className="delete-memory__button-container">
          <p
            className="delete-memory__button delete-memory__button--cancel"
            onClick={closeModal}
          >
            Cancel
          </p>
          <p
            className="delete-memory__button delete-memory__button--delete"
            onClick={handleClick}
          >
            Confirm Delete
          </p>
        </div>
      </article>
    </div>
  );
}

export { Modal };

class DeleteMemory extends Component {
  state = { modal: false };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ modal: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ modal: false });
  };

  render() {
    return (
      <>
        <p
          type="button"
          className="delete-memory__prompt"
          onClick={this.openModal}
        >
          Delete Memory
        </p>
        <Modal
          modal={this.state.modal}
          closeModal={this.closeModal}
          props={this.props}
        />
      </>
    );
  }
}

export default DeleteMemory;
