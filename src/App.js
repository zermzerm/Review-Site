import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import './reset.css';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
