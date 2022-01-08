import React from "react";
import "../style.css";

function Homepage() {
  return (
    <>
      <nav id="tabs">
        <h1 id="greeting">sup dude</h1>
        <div class="folder-tab selected">
          <span>Time entries</span>
        </div>
      </nav>
      <div id="page">Lorem Ipsum dolor sit amet ...asdfasdf</div>
    </>
  );
}

export default Homepage;
