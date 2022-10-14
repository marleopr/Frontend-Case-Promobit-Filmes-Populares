import GlobalStyle from './styles/global';
import { Router } from "./routes/Router";
import GlobalState from "./components/global/GlobalState";
import Header from './components/header/header';

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;