import "./MemoryList.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class MemoryList extends Component {
  componentDidMount() {
    const userID = this.props.match.params.userID;
    console.log("MEMORY LIST MOUNTED");
    this.props.getSingleUser(userID);
    this.props.getUserMemories(userID);
  }

  render() {
    const { userID, firstName } = this.props.activeUser;

    return (
      <section className="memoryList">
        <article className="memoryList__container">
          <div className="memoryList__header-box">
            <h2>{firstName}'s Memories</h2>
          </div>
          <ul>
            {this.props.userMemories.map((memory) => {
              return (
                <Link
                  key={memory.memoryID}
                  to={`/profile/${memory.userID}/memories/${memory.memoryID}`}
                  className="memoryList__li"
                >
                  <p>
                    {memory.title}
                    <p>{memory.dateOfMemory}</p>
                  </p>
                  <p> CLICK </p>
                </Link>
              );
            })}
          </ul>
        </article>
        <Link to={`/profile/${userID}`} className="memoryList__box">
          <h4>RETURN TO MEMORY OVERVIEW</h4>
        </Link>
      </section>
    );
  }
}

export default MemoryList;
