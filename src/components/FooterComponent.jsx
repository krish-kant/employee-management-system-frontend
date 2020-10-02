import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="App-footer">
          <span className="text-muted">
            All Rights Reserved @
            <a href="https://github.com/krish-kant">
              https://github.com/krish-kant
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
