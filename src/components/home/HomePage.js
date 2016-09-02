import React from 'react';
import {Link} from 'react-router';

class Hompage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Plurarlsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra responsive web apps.</p>
        <Link to="about" className="btn btn-primarty btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default Hompage;
