import './App.css';
import globalStyle from './styles/global.style.js';
import { Layout } from './styles/theme.config.js';

import Navigation from './components/Navigation/Navigation';

function App() {
  globalStyle()
  return (
      <>
        <Layout> 
          <Navigation />
        </Layout>
      </>
  );
}

export default App;
