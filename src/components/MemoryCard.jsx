import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCardBack extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <div className="MemoryCardInner">
          <div className="MemoryCardBack">
            <img
              class="image"
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt=""
              width="100%"
            ></img>
          </div>
          <div className="MemoryCardFront">
            <p>∆</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCardBack;
