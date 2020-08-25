import styled from 'styled-components';
import { Link as Anchor } from "wouter";

export const Link = styled(Anchor)`
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 10px;
`

export const ListItem = styled.li`
  list-style: none;
  padding-bottom: 20px;
`

export const Subtitle = styled.h3`
  color: magenta;
  padding-bottom: 20px;
  border-bottom: 2px solid;
`
export const ContainerHome = styled.div`
  text-align: left;
  width: 500px;
  background-color: #161b24;
  padding: 30px;
  border-radius: 20px;
`