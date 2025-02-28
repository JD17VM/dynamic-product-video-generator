import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateVideo from './components/CreateVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;