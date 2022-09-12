import React from "react";
import "./Top.css";

function Top() {
  return (
    <div id="Top">
      <a href="https://www.safezen.finance/">
        <h1 id="Title">SafeZen</h1>
      </a>
      <div id="TopFurther">
        <a href="https://drive.google.com/file/d/1QFRwtGgwh38ZGAI9ARnlVhsRushCRXN7/view">
          <h3 className="TopSide">Whitepaper</h3>
        </a>
        <h3 className="TopSide">Documentation</h3>
        <h3 className="TopSide">Blog</h3>
        <button id="Launch">Launch App</button>
      </div>
    </div>
  );
}

export default Top;
