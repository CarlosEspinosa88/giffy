import React from 'react'
import {ListOfTrending, List, Link} from './styles'
import {Subtitle} from "../../styles/GlobalStyles";

export default function Category({trends = []}) {
  return (
    <>
      <Subtitle>Tendencias</Subtitle>
      <ListOfTrending>
        {
        trends.map((trend) => (
            <List key={trend}>
              <Link to={`/search/${trend}`}>{trend}</Link>
            </List>
        ))}
      </ListOfTrending>
    </>
  )
}
