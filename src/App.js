import React from 'react'
import './assets/css/App.css';
import Home from './pages/Home/index';
import Resultados from './pages/Search/index';
import Detail from './pages/Detail/index'
import Top10Gifs from './pages/Top10Gifs/index'
import { Route } from 'wouter'
import NavMenu from 'components/NavMenu/NavMenu';

function App() {
  return (
    <>
      <NavMenu />
      <section className="App">
        <div className="AppContent">
            <Route component={Home} path="/"/>
            <Route component={Top10Gifs} path="/top10gifs"/>
            <Route component={Resultados} path="/search/:keyword"/>
            <Route component={Detail} path="/gifs/:id"/>
        </div>
      </section>
    </>
  );
}

export default App;
