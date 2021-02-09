import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="intro">
                    Hello, and Welcome!
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/character">Character List</Link>
          </li>
          
                    


        </ul>
      </div>
    );
  }
}