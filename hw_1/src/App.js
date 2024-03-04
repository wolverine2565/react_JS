import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/About';


function App() {
    return (
<Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная страница</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
</Router> 
  ); 
}

export default App;
