import React, { Component } from "react";
import axios from "axios";
class Axiosall extends Component {
  componentDidMount() {
    axios.post("/users", { name: "Hossein" }).then((response) => {
      console.log(response);
    });

    /*
    // for send many req to server we can use from this method
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then(
        // we can spread axios this method work like destructuring
        axios.spread(( users) => {
          // console.log(users.data);
        })
      );

      */
  }

  render() {
    return <div></div>;
  }
}

export default Axiosall;
