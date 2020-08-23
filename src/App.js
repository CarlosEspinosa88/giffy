import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Home';
import Detail from './pages/Detail';
import styled from 'styled-components';
import { 
  Route, 
  // Link as Anchor 
} from "wouter";

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
      {/* <Link to='/'>Home</Link>
      <Link to='/gif/Colombia'>Gif Colombia</Link>
      <Link to='/gif/Peru'>Gif Peru</Link>
      <Link to='/gif/Argentina'>Gif Argentina</Link>
      <Link to='/gif/Brasil'>Gif Brasil</Link> */}
      <Route 
        component={Home} 
        path="/"
      />
      <Route 
        component={ListOfGifs} 
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