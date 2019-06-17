
import React from "react";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      Google Books  
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  )
}

export default Nav;
