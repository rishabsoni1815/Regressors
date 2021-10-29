import './App.css';
import globalStyle from './styles/global.style.js';

import { Layout } from './styles/theme.config.js';
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
