import React, { Component } from 'react';
import '../CSS/AboutUsPageCSS/aboutheader.css';

class AboutHeader extends Component {

  render() {
    return (
        <div className="aboutusheader">
          <h2 className="headertitle"> ABOUT US </h2>
          <div className="headerunderline"></div>
        </div>
    );
  }

}

export default AboutHeader;