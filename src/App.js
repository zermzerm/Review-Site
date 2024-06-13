import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import Create from './components/Create';
import Home from './components/Home';
import Main from './components/Main';
import './reset.css';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Content />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
