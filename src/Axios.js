import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";
import SendPost from "./SendPost";

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      isError: false,
    };
  }

  // Get in Axios
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>
        this.setState({
          postData: response.data,
        })
      )
      .catch(() => this.setState({ isError: true }));
  }

  // Delete method in Axios
  deletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => console.log(response));
  };

  render() {
    const { postData, isError } = this.state;
    return (
      <div>
        <SendPost />
        <h1>Posts:</h1>
        {isError ? (
          <h1>An error occurred please try later again</h1>
        ) : (
          postData.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              deletePost={() => this.deletePost(post.id)}
              body={post.body}
            />
          ))
        )}
      </div>
    );
  }
}

export default Axios;
