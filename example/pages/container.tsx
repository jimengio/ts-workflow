import React, { FC } from "react";
import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css } from "emotion";

import Home from "./home";
import Content from "./content";
import { HashRedirect } from "@jimengio/ruled-router/lib/dom";
import { genRouter } from "controller/generated-router";

const renderChildPage = (routerTree: IRouteParseResult) => {
  if (routerTree != null) {
    switch (routerTree.name) {
      case genRouter.home.name:
        return <Home />;
      case genRouter.content.name:
        return <Content />;
      default:
        return (
          <HashRedirect to={genRouter.home.name} delay={2}>
            2s to redirect
          </HashRedirect>
        );
    }
  }
  return <div>NOTHING</div>;
};

let Container: FC<{
  router: IRouteParseResult;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <div className={styleTitle}>Container</div>
      {renderChildPage(props.router)}
    </div>
  );
});

export default Container;

const styleContainer = css``;

const styleTitle = css`
  margin-bottom: 16px;
`;
