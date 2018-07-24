import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";
import { css } from "emotion";

import { parseRoutePath, IRouteParseResult } from "ruled-router";

import { routerRules } from "./models/router-rules";

import Home from "./pages/home";
import Content from "./pages/content";

const renderChildPage = (routerTree: IRouteParseResult) => {
  if (routerTree != null) {
    switch (routerTree.name) {
      case "home":
        return <Home />;
      case "content":
        return <Content />;
    }
  }
  return <div>NOTHING</div>;
};

const Container = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  return (
    <div className={styleContainer}>
      <div className={styleTitle}>Container</div>
      {renderChildPage(routerTree)}
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

declare var module: any;

if (module.hot) {
  module.hot.accept([], () => {
    renderApp();
  });
}

const styleContainer = css`
  font-family: "Helvetica";
`;

const styleTitle = css`
  margin-bottom: 16px;
`;
