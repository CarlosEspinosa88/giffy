import React from "react";
import Gif from "../Gif";
import {Item, List } from "./styles";

export default function ListOfGifs({gifs}) {

  return (
    <List>
      {
        gifs.map(({id, title, url}) => 
          <Item>
            <Gif
              key={id}
              id={id}
              title={title}
              url={url}
            />
          </Item>
        )
      }
    </List>
  )
}
