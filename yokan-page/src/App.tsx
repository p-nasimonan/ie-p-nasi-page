/*
  @ts-check
  @type {import('react').FunctionComponent}
  
*/
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Game from './pages/Game'
/*
  Appコンポーネント
  @returns {JSX.Element}
*/
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter basename="/~e245719">
      {isLoading && <Loading hideLoading={hideLoading} />}
      <div className={`content-wrapper ${!isLoading ? 'visible' : ''}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
