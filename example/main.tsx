import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";

import "main.css";

import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";

import { routerRules } from "./models/router-rules";

import Container from "./pages/container";
import { demo } from "../src/index";

const renderApp = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  ReactDOM.render(<Container router={routerTree} />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

demo();

declare var module: any;

if (module.hot) {
  module.hot.accept([], () => {
    renderApp();
  });
}
