import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import styled from 'styled-components';
import { Route, Link } from "wouter";

const Container = styled.div`
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-color: #282c34;
  min-height:  100vh;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white 
`

function App() {
  return (
    <Container>
      <Link to='/'>
        <img alt='logo' src="/logo192.png" />
      </Link>
      <Route 
        component={Home} 
        path="/"
      />
      <Route 
        component={SearchResults} 
        path="/gif/:keyword"
      />
      <Route 
        component={Detail} 
        path="/gif/:id"
      />
    </Container>
  )
}

export default App