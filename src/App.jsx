import { Route, Switch, BrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/sobre">
          <Sobre></Sobre>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
