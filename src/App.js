import globalStyle from "./styles/global.style.js";

import { Layout } from "./styles/theme.config.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  globalStyle();
  return (
    <Router>
      <Layout>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={ProductPage} />
      </Layout>
    </Router>
  );
}

export default App;
