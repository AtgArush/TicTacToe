import React, {useState} from 'react';

import Icon from "./Icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import './App.css';

const itemArray = new Array(9).fill("empty")



const App = () => {

  const [IsCross, setIsCross] = useState(false)
  const [WinnerIs, setWinnerIs] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinnerIs("")
    itemArray.fill("empty", 0, 9)
  }
  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
      ) {
      setWinnerIs( itemArray[0] )
      toast ( `Congratulations, ${itemArray[0]} has won`, {type: "success"} )
      
    }
    else if (itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinnerIs(itemArray[3])
      toast ( `Congratulations, ${itemArray[4]} has won`, {type: "success"} )
    }else if (itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinnerIs(itemArray[6])
      toast ( `Congratulations, ${itemArray[7]} has won`, {type: "success"} )
    } else if (itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinnerIs(itemArray[0])
      toast ( `Congratulations, ${itemArray[3]} has won`, {type: "success"} )
    } else if (itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinnerIs(itemArray[1])
      toast ( `Congratulations, ${itemArray[1]} has won`, {type: "success"} )
    } else if (itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinnerIs(itemArray[2])
      toast ( `Congratulations, ${itemArray[8]} has won`, {type: "success"} )
    } else if (itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinnerIs(itemArray[0])
      toast ( `Congratulations, ${itemArray[4]} has won`, {type: "success"} )
    } else if (itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinnerIs(itemArray[2])
      toast ( `Congratulations, ${itemArray[2]} has won`, {type: "success"} )
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ){
      setWinnerIs("Draw game")
      toast ( `its a draw, please restart the game`, {type: "error"} )
    }
  }
  const changeItem = itemNumber => {
    if (WinnerIs){
      return toast ( ` Game Over, ${WinnerIs} has Won `, { type: "error" } )
    }
    if ( itemArray[itemNumber] === "empty" ) {
      itemArray[itemNumber] = IsCross ? "Cross" : "Circle"
      setIsCross ( !IsCross)
    } else {
      return toast ( "Already filled, try other block", {type: "error"} )
    }

    checkIsWinner();

  }


return (
<Container>
  <ToastContainer position = "bottom-center" />
    <Row>
      <Col md={6} >

        {WinnerIs ? (
          <div className = "mb=2 mt=2">
            <h1 className = { IsCross ? "cross text-upper" : "circle" }>
              {WinnerIs} Wins
            </h1>

            <Button
            color = "warning"
            block
            onClick = {reloadGame}
            >
              Play Again?
            </Button>
          </div>
        ) : (
          <div className = "mb=2 mt=2">
            <h1  className = { IsCross ? "circle" : "cross" } >
              {IsCross ? ( "Your Turn Cross") : ( "Your Turn Circle" )}
            </h1>
            <Button
            color = "warning"
            block
            className = ""
            onClick = {reloadGame}
            >
              Wanna Restart?
            </Button>
            </div>
        ) }

        <div className = "grid">
          {itemArray.map ( (item, index) =>(
            <Card  onClick = { () => changeItem(index) } className = {item === "Circle" ? "circleHead" : "crossHead" } >
              <CardBody className = {item === "empty" ? "abc MyIcon" : "MyIcon" } >
                <div className="cetnre">  
                <Icon name = {item} className = "MyIcon" />
                </div>
              </CardBody>
            </Card>
          ) ) }
        </div>
      </Col>
    </Row>
</Container>
  )
}

export default App;
