import styled from "styled-components";
import { Link as Anchor } from "wouter";

export const Container = styled.div`
  margin-bottom: .5em;
`

export const Link = styled(Anchor)`
  color: #000;
  display: block;
  text-decoration: none;
  position: relative;
  width: 100%;
`

export const Title = styled.h4` 
  background: rgba(0, 0, 0, .3);
  bottom: 0;
  font-size: 12px;
  color: #fff;
  margin: 0;
  position: absolute;
  padding: 10px;
`

export const ImageGif = styled.img` 
  width: 100%;
  object-fit: contain;
  vertical-align: top;
`
