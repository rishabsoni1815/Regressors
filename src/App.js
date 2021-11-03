import './App.css';
import globalStyle from './styles/global.style.js';

import { Layout } from './styles/theme.config.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  globalStyle()
  return (
      <>
        <Layout> 
          <Navigation />
          <Home />
        </Layout>
      </>
  );
}

export default App;
