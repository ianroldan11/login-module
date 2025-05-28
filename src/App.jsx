import "./App.css";
import { Outlet } from "react-router";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <Outlet />
    </Provider>
  );
}

export default App;
