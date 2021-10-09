import React from 'react';
import CoinList from './pages/CoinList';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
           <Router>
               <div className='container'>
                   <Link to='/'>CoinList</Link><br/>
                   <Link to='/about'>About</Link><br/>
                   <Link to='/dashboard'>Dashboard</Link><br/>
               </div>
            
              <hr />

              <Switch>
                 <Route path='/' exact>
                    <CoinList />
                 </Route>
                 <Route path='/about' exact>
                    <About />
                 </Route>
                 <Route path='/dashboard' exact>
                     <Dashboard />
                 </Route>
              </Switch>

           </Router>
        )
    }
}

export default App


function About() {
    return 'About mi vida';
}

function Dashboard() {
    return 'Como se dice dashboard en Espanol?';
}