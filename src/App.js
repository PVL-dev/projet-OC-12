import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import VerticalNav from './components/VerticalNav.js';
import Dashboard from './pages/Dashboard.js';

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <VerticalNav />

        <Routes>
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

