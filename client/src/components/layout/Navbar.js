import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <div>
            <Link to="/" style={{ fontFamily: "monospace" }}>
              MERN
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
