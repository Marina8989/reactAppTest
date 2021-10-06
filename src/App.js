import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
           <Router>
               <div className='container'>
                   <Link to='/'>Home</Link><br/>
                   <Link to='/about'>About</Link><br/>
                   <Link to='/dashboard'>Dashboard</Link><br/>
               </div>
            
              <hr />

              <Switch>
                 <Route path='/' exact>
                    <Home />
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

function Home() {
    return 'HOME SWEET HOME';
}

function About() {
    return 'About mi vida';
}

function Dashboard() {
    return 'Como se dice dashboard en Espanol?';
}