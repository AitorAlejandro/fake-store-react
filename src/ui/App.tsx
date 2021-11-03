import { StoreRouter } from "./bridge";
import { Home } from "./pages";

import "normalize-css";

export const App: React.FC = () => {
  return (
    <StoreRouter.BrowserRouter>
      <h1>Fake Store React</h1>
      <StoreRouter.Switch>
        <StoreRouter.Route path="/">
          <Home />
        </StoreRouter.Route>
      </StoreRouter.Switch>
    </StoreRouter.BrowserRouter>
  );
};
