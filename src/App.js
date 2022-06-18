import Routes from "./Routes";
import GlobalStyle from "./Global";
import "./AppStyle.js";
import { AppStyle } from "./AppStyle.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Routes></Routes>
      <ToastContainer />
    </AppStyle>
  );
}

export default App;
