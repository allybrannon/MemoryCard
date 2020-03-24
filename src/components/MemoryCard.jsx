import React, { Component } from "react";
import "./components/MemoryCard.css";

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <img
          src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
          class="card"
        ></img>
      </div>
    );
  }
}

export default MemoryCard;
