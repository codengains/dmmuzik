import React, { Component } from 'react';
import '../styles/css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">DM</span>
              <span className="heading-primary-sub">Muszik</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;