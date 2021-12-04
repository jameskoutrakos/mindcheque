import "./MemoryList.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

import chevronBlack from "../../assets/icons/next-black.svg";

class MemoryList extends Component {
  componentDidMount() {
    const userID = this.props.match.params.userID;
    this.props.getSingleUser(userID);
    this.props.getUserMemories(userID);
  }

  render() {
    const { userID, firstName } = this.props.activeUser;

    return (
      <section className="memory-list">
        <article className="memory-list__container">
          <div className="memory-list__header-box">
            <h2>{firstName}'s Memories</h2>
          </div>
          <ul className="memory-list__ul">
            {this.props.userMemories.map((memory) => {
              return (
                <Link
                  key={memory.memoryID}
                  to={`/profile/${memory.userID}/memories/${memory.memoryID}`}
                  className="memory-list__li"
                >
                  <div>
                    <p className="memory-list__title">{memory.title}</p>
                    <p className="memory-list__date">
                      Date of Memory:{" "}
                      {memory.dateOfMemory !== undefined &&
                        memory.dateOfMemory.slice(0, 10)}
                    </p>
                  </div>
                  <img
                    className="memory-list__img"
                    src={chevronBlack}
                    alt={`select here to see the memory titled ${memory.title}`}
                  />
                </Link>
              );
            })}
          </ul>
          <Link to={`/profile/${userID}`} className="memory-list__box">
            <div className="memory-list__img memory-list__img--back-arrow"></div>
            <p className="memory-list__return-text">
              Return to Memory Overview
            </p>
          </Link>
        </article>
      </section>
    );
  }
}

export default MemoryList;
