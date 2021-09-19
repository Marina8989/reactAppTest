import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import User from './pages/User';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: red;
    &:hover {
      color: green;
    }
`
const ListOrdered = styled.ul`
     display: flex;
     justify-content: space-between;
`
const ListElement = styled.li`
     list-style: none;
`



export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ListOrdered>
            <ListElement>
              <StyledLink to="/">Home</StyledLink>
            </ListElement>
            <li>
                <StyledLink to="/user/facebook">facebook</StyledLink>
            </li>
             <li>
                <StyledLink to="/user/mozilla">mozilla</StyledLink>
            </li>
            <li>
                <StyledLink to="/user/target">target</StyledLink>
            </li>
          </ListOrdered>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }