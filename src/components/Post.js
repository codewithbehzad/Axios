import React, { Component } from "react";

class Post extends Component {
  render() {
    const { body, title, deletePost } = this.props;
    return (
      <div
        style={{ border: "1px solid grey", margin: "10px", padding: "0 20px" }}
      >
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    );
  }
}

export default Post;
