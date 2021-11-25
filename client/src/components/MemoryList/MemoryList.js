import "./MemoryList.scss";

import { Component } from "react";

class MemoryList extends Component {
  componentDidMount() {
    console.log("MEMORY LIST MOUNTED");
    this.props.getSingleUser(this.props.match.params.userID);
    this.props.getUserMemories(this.props.match.params.userID);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     const { id } = this.props.match.params;

  //     if (id) {
  //       if (prevState.activeUser !== id) {
  //         this.props.getSingleUser(id);
  //       }
  //     } else if (!id) {
  //       this.props.getSingleUser(1);
  //     }
  //   }

  render() {
    const { firstName } = this.props.activeUser;

    return (
      <section className="memoryList">
        <article className="memoryList__container">
          <h1>{firstName}'s Memories</h1>
          <ul>
            {this.props.userMemories.map((memory) => {
              return <li key={memory.memoryID}>{memory.title}</li>;
            })}
          </ul>
        </article>
      </section>
    );
  }
}

export default MemoryList;
