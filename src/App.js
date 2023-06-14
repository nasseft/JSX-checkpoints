import React from "react";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";
import { Card } from "react-bootstrap";

const App = ()=>{
  
  const firstName='Nassef';
  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Card.Title>
            <Name/>
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        {firstName?<h2>hello {`${firstName}`}</h2>: <h2> hello there</h2>}
      </div>
    </div>
  );
};

export default App;