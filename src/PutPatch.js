import axios from "axios";
import React, { Component } from "react";

class PutPatch extends Component {
  /* 
PUT vs PATCH
1. Update Partially or Fully a.k.a Replace?
PUT and PATCH can both be used for updating resources.
 However, the biggest difference between these two is 
 that one can update and replace the resource while 
 the other one can update partially.

In other words, when making a PUT request,
 the enclosed entity (a specific place you are making request on) 
 is viewed as the modified version of the resource, 
 and the client is requesting to replace with the new info;
  when making a PATCH request, it modifies only some part of the resource.
  */

  componentDidMount() {
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "new Title",
        body: "new Body",
      })
      .then((response) => console.log(response.data));

    /*
axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "new Title",
        body: "new Body",
      })
      .then((response) => console.log(response.data));
*/
  }

  render() {
    return (
      <div>
        <h1>Hossein</h1>
      </div>
    );
  }
}

export default PutPatch;
