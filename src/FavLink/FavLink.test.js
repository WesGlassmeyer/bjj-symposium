import React from "react";
import ReactDOM from "react-dom";
import FavLink from "./FavLink";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <FavLink />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
