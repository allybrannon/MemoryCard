import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    if (this.state.isFlipped === true) {
      memoryCardInnerClass = "MemoryCardInner flipped";
    }
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              class="image"
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt=""
              width="100%"
            />
          </div>
          <div className="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
