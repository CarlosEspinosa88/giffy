import styled from "styled-components";
import { device } from "../../theme";
import { Link as Anchor } from 'wouter'

export const ListOfTrending = styled.div`
  grid-gap: 12px;
  width: 100%;
  height: auto;
  font-size: 10px;
  text-align: left;
  word-break: break-all;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-position: inside;
    list-style: none;
    font-size: 14px;
  }
`;

export const List = styled.li`
  padding: 0;
  @media ${device.tablet} {
    padding: 0 10px;
  }
`;

export const Link = styled(Anchor)`
  color: white;
  text-decoration: none;
  &:hover {
    color: magenta;
  }
`