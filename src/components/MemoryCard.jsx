import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <img
          class="image"
          src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
          alt=""
          width="100%"
        ></img>
      </div>
    );
  }
}

export default MemoryCard;
