import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import {Route, Link} from "wouter";
import {GifsContextProvider} from "./context/GifsContext"
import {GlobalStyles, Layout, Logo} from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Link to='/'>
          <Logo alt='logo' src="/logo192.png" />
        </Link>
        <GifsContextProvider>
          <Route 
            component={Home} 
            path="/"
          />
          <Route 
            component={SearchResults} 
            path="/search/:keyword"
          />
          <Route 
            component={Detail} 
            path="/gif/:id"
          />
        </GifsContextProvider>
      </Layout>
    </>
  )
}

export default App