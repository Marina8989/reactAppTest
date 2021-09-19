import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
            <ListElement>
              <StyledLink to="/about">About</StyledLink>
            </ListElement>
            <ListElement>
              <StyledLink to="/users">Users</StyledLink>
            </ListElement>
          </ListOrdered>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}