import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer/Drawer";
import Router from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveDrawer>
          <Router />
        </ResponsiveDrawer>
      </div>
    </BrowserRouter>
  );
}

export default App;
