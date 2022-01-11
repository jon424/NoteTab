import React from "react";
import "../style.css";

function Homepage() {
  return (
    <>
      <h1 id="greeting">sup dude</h1>
      <div class="folder-tab selected">
        <span>Time entries</span>
      </div>

      <div id="page">
        Lorem Ipsum dolor sit amet ...asdfasdf
        {/* <footer id="footer">
          <p>
            Author: Hege Refsnes
            <br />
            <a href="mailto:hege@example.com">hege@example.com</a>
          </p>
        </footer> */}
      </div>
      <footer id="footer">
        <p>
          Author: Who Dis
          <br />
          <a href="mailto:hege@example.com">whod@example.com</a>
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </footer>

      <div class="sidenav">
        <input class="search-input" type="text" placeholder="Search.." />
        <a href="">Note 1</a>
        <a href="">Note 2</a>
        <a href="">Note 3</a>
        <a href="">Note 4</a>
      </div>
      {/* <div>
        <p>Author: Hege Refsnes</p>
      </div> */}
    </>
  );
}

export default Homepage;
