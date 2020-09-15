import styled from "styled-components";
import { device, columns } from "../../theme";


export const List = styled.div`
  column-count: ${columns.one};
  column-gap: .5em;
  min-height: 100vh;

  
  @media ${device.tablet} {
    column-count: ${columns.two};
  }

  @media ${device.laptop} {
    column-count: ${columns.three};
  }

  @media ${device.desktop} {
    column-count: ${columns.four};
  }

`;

export const Item = styled.div`
  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
  page-break-inside: avoid; /* Firefox */
  break-inside: avoid; /* IE 10+ */
  background-color: transparent;
  display: inline-block;
  width: 100%;
`;
