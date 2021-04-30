import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { appRouter } from "./router.config";
function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRouter.map((route) => {
          return <Route path={route.path} component={route.component} exact />;
        })}
        <Redirect from="/" to="/shopping" />
      </Switch>
    </Suspense>
  );
}

export default Router;
