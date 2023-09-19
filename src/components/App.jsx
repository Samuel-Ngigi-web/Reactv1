import React from "react";
import Card from "./Card";
import Header from "./Header"
import Dictionary from "./Dictionary";

function mapcard(cardProperty){
  return(
  <Card
 key={cardProperty.id}
 date={cardProperty.date}
 quote={cardProperty.quote}
 by={cardProperty.by}
 />
  )
}

function App(){
  return(
  <div>
  <Header />
   <div className="cards-container">{Dictionary.map(mapcard)}</div>
  </div>
  )
}


export default App;