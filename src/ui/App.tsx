import { StoreRouter } from "./bridge";
import { Home } from "./pages";

import "normalize-css";
import "milligram";

export const App: React.FC = () => {
  return (
    <StoreRouter.BrowserRouter>
      <StoreRouter.Switch>
        <StoreRouter.Route exact path="/" component={Home} />
        <StoreRouter.Route path="*">
          <StoreRouter.Redirect to="/" />
        </StoreRouter.Route>
      </StoreRouter.Switch>
    </StoreRouter.BrowserRouter>
  );
};
