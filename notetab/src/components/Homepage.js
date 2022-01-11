import React from "react";
import "../style.css";

function Homepage() {
  return (
    <>
      <main id="main">
        <h1 id="greeting">sup dude</h1>
        <div class="folder-tab selected">
          <span>Time entries</span>
        </div>
      </main>

      <div id="page">Lorem Ipsum dolor sit amet ...asdfasdf </div>
      <div class="sidenav">
        <input class="search-input" type="text" placeholder="Search.." />
        <a href="">Note 1</a>
        <a href="">Note 2</a>
        <a href="">Note 3</a>
        <a href="">Note 4</a>
      </div>
    </>
  );
}

export default Homepage;
