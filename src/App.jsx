import React from "react";
import axios from "axios";
import cheerio from "cheerio";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [
        {
          id: 0,
          name: "Moto G Power",
        },
      ],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <div className="header"></div>
        <div className="body"></div>
      </div>
    );
  }
}

export default App;
