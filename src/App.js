import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import VerticalNav from './components/VerticalNav.js';
import Dashboard from './pages/Dashboard.js';
import ErrorPage from './pages/ErrorPage.js';
import LoadingPage from './pages/LoadingPage.js';

/**
 * Generate Application in DOM
 * 
 * The "App" constant returns a div with all the components and Routes of the app.
 * 
 * @returns Router component
 * @returns {reactElement}
 */

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <VerticalNav />

        <Routes>
        <Route path='/loading' element={<LoadingPage />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

