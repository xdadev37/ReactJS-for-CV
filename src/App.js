import { Layout } from './Common/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
}

export default App;
