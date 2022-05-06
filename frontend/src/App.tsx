import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Link,
  Route,
  Routes,
  Outlet,
  useNavigate
} from 'react-router-dom';

const TShirtGame = React.lazy(() => import('./games/TShirtGame/Entry'));
const Game = React.lazy(() => import('./Game'));

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='game/:code' element={
            <React.Suspense>
              <Game />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </main>
  );
}

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(code.toUpperCase());
    // as-you-type input validation
    for (let i = 0; i < code.length; i++) {
      // if char is not a letter
      if (code[i].toUpperCase() === code[i].toLowerCase()
        || (code[i].codePointAt(0) || ' ') > 127) {
        // remove char
        setCode(code.slice(0, i) + code.slice(i + 1));
      }
    }

    if (code.length > 4) {
      setCode(code.slice(0, 4));
    }
  }, [code]);

  return (
    <div>
      <input value={code}
             onInput={
               e => setCode((e.target as HTMLInputElement).value)
             }
             onKeyDown={e => {
               if (e.code === 'Enter') {
                 navigate(`/game/${code}`);
               }
             }} />
      <br />
      <Link to='/game'>Join Game</Link>
    </div>
  );
};

export default App;
