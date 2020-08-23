import React from 'react';
import styled from 'styled-components';
import { Link as Anchor } from "wouter";

const Link = styled(Anchor)`
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 10px;
`

const ListItem = styled.li`
  list-style: none;
  padding-bottom: 20px;
`

const Subtitle = styled.h3`
  color: magenta;
  padding-bottom: 20px;
  border-bottom: 2px solid;
`
const ContainerHome = styled.div`
  text-align: left;
  width: 350px;
  background-color: #161b24;
  padding: 30px;
  border-radius: 20px;
`

const GIFS_POPULARES = [
  "Colombia",
  "Peru",
  "Brasil",
  "Argentina"
] 

export default function Home() {
  return (
    <ContainerHome>
      <Subtitle>Los gif's mas populares</Subtitle>
      {GIFS_POPULARES.map((gifPolular) => (
        <ListItem key={gifPolular}>
          <Link to={`/gif/${gifPolular}`}>
            Gif's de {gifPolular}
          </Link>
        </ListItem>
      ))}
    </ContainerHome>
  )
}
