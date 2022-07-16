import React, { useState } from 'react'
import Cheese from './Cheese'


const Cheeses = () => {

  const cheeseList = useState({
    "id" : 1,
    "title": "Swiss cheese",
    "description" : "The Swiss make hundreds of different cheeses, so the generic name Swiss cheese is a bit of a misnomer. It refers to a mass-produced cheese sold in North America that is vaguely reminiscent of the true Swiss variety called Emmenthal",
    "image" : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nv5McWK7-IAmhcIfCh6cLgHaE8%26pid%3DApi&f=1"
})

  console.log(cheeseList.length)

  return (
    <>
      {cheeseList.map((cheese) => (
          <Cheese date='2009' image={cheese.image} description={cheese.description} title={cheese.title}></Cheese>
      ))}
    </>
    
  )
}

export default Cheeses