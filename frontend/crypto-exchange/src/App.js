import Header from './components/Header';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
