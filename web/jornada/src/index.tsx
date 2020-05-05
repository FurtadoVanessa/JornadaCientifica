import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Login from './components/Login';
import Menu from './components/Menu'
import Inicio from './components/Inicio'
import Trabalhos from './components/Trabalhos'
import Check_in from './components/Check_in'
import Avaliacoes from './components/Avaliacoes'
import Almoco from './components/Almoco'
import Avaliadores from './components/Avaliadores'
import Participantes from './components/Participantes'
import Categorias from './components/Categorias'

function Greeting(props: { isLoggedIn: any; }) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/inicio" />
          <Menu />
          <Route path='/inicio' component={Inicio} />
          <Route path='/trabalhos' component={Trabalhos} />
          <Route path='/check_in' component={Check_in} />
          <Route path='/avaliacoes' component={Avaliacoes} />
          <Route path='/almoco' component={Almoco} />
          <Route path='/avaliadores' component={Avaliadores} />
          <Route path='/participantes' component={Participantes} />
          <Route path='/categorias' component={Categorias} />

        </div>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Redirect from="/" to="/login" />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>);
}

ReactDOM.render(
  //isLoggedIn={false} -> Página de Login
  //isLoggedIn={true} -> Menu principal
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
