import './App.css';
import globalStyle from './styles/global.style.js';

import { Layout } from './styles/theme.config.js';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  globalStyle()
  return (
      <Router>
        <Layout> 
          <Navigation />
          <Route exact path="/" component={Home}/>          
        </Layout>
      </Router>
  );
}

export default App;
