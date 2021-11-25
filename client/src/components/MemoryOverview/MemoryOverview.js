import "./MemoryOverview.scss";

import { Component } from "react";

class MemoryOverview extends Component {
  componentDidMount() {
    console.log("MEMORY OVERVIEW MOUNTED");
    this.props.getSingleUser(this.props.match.params.userID);
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
    const { firstName, lastName } = this.props.activeUser;

    return (
      <section className="memoryOverview">
        <article className="memoryOverview__container">
          <h1>
            {firstName} {lastName}
          </h1>
        </article>
      </section>
    );
  }
}

export default MemoryOverview;
