import React from 'react';
import './App.css';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
// import { matchPath } from "react-router";
const TShirtGame = React.lazy(() => import("./games/TShirtGame/Entry"));

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={
            <React.Suspense>
              <TShirtGame />
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
      <Outlet/>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <input/>
      <br />
      <Link to="/game">Join Game</Link>
    </div>
  );
}

export default App;
