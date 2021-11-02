import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from './pages';

import 'normalize-css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
        <h1>Fake Store React</h1>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
