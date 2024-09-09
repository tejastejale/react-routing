import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"product"}>See Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
