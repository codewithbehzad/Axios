import React, { Component } from "react";
import axios from "axios";

class SendPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    console.log(this.state);
    this.setState({
      // for specify a value of a key we must use from  []  also before this we must add a name for our input => like this:
      [event.target.name]: event.target.value,
    });
  };

  // post in Axios
  postHandler = () => {
    // const data = {
    //   title: this.state.title,
    //   body: this.state.body,
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response));
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <label>Tile:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label>Body:</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <button onClick={this.postHandler}>Send post</button>
      </div>
    );
  }
}

export default SendPost;
