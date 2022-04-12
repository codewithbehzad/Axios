import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }
  getPost() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          
          postData: json,
        })
      );
  }

  sendPost = () => {
    const body = JSON.stringify({
        title: "full course",
        body: "this is test",
        userId: 1,
      }),
      headers = {
        "Content-type": "application/json; charset=UTF-8",
      };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  render() {
    return (
      <div>
        <button onClick={this.getPost}> Get Post </button>
        <br />
        <button onClick={this.sendPost}>SendPost</button>
        <br />
        <br />
        <button onClick={this.deletePost}>Delete</button>
        <h1>Post:</h1>
        {this.state.postData.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    );
  }
}

export default Child;
