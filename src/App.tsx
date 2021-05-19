import { BrowserRouter } from "react-router-dom"
import NavDrawer from "./components/NavDrawer";
import Routes from './routes'
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden"}}>
      <GlobalStyles />
      <BrowserRouter>
        <NavDrawer />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
