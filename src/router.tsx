import { BrowserRouter, Route, Switch } from "inferno-router";
import { Tcomponent, routerArray } from "./types/inferno";

export const routes: routerArray = [];
export const notFoundRoute: routerArray = [];

const PageRouter = () => {
  const files = import.meta.glob("./pages/*.tsx", { import: "default", eager: true });

  const Slot = () => {
    Object.entries(files).map((file) => {
      const pathName = String(file[0]).replace("./pages", "").replace(".tsx", "");
      const Component: Tcomponent = file[1] as Tcomponent;

      if (file[0].includes("not-found.tsx")) {
        notFoundRoute.push({ fileName: file[0], pathName, Component });
      } else {
        routes.push({ fileName: file[0], pathName, Component });
      }
    });

    const hasNotFoundPage = notFoundRoute.filter((route) => {
      return route.fileName.includes("not-found.tsx");
    });

    return (
      <>
        {routes.map((route: { fileName: string; pathName: string; Component: Tcomponent }) => {
          if (route.pathName.includes("index") && route.fileName.includes("/index.tsx")) {
            const dirRootPath =
              route.pathName.replace("/index", "") !== "" ? route.pathName.replace("/index", "") : "/";
            return <Route exact path={dirRootPath} component={route.Component} />;
          } else {
            return <Route path={route.pathName} component={route.Component} />;
          }
        })}
        {hasNotFoundPage ? <Route path="*" component={hasNotFoundPage[0].Component} /> : <></>}
      </>
    );
  };

  if (files) {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Slot />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};
export default PageRouter;
