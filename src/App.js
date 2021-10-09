import React from 'react';
import CoinList from './pages/CoinList';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';
//import styled from 'styled-components';


class App extends React.Component{
    render(){
        return(
           <Router>
               {/* <div className='container'>
                   <Link to='/'>CoinList</Link><br/>
                   <Link to='/portfolio'>Portfolio</Link><br/>
                   <Link to='/coinPage'>CoinPage</Link><br/>
               </div> */}
              <Switch>
                 <Route path='/' exact>
                    <CoinList />
                 </Route>
                 <Route path='/portfolio' exact>
                    <Portfolio />
                 </Route>
                 <Route path='/coinPage' exact>
                     <CoinPage />
                 </Route>
              </Switch>

           </Router>
        )
    }
}

export default App


function Portfolio() {
    return 'Portfolio';
}

function CoinPage() {
    return 'CoinPage describe';
}