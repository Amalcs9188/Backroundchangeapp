
import React from 'react';
import Button from 'react-bootstrap/Button';


const App = () => {

  const bgchange = (color)=>{
    document.body.style.backgroundColor = color;
  

  

  }
  return (
    <div>

      <Button name='blackk' style={{color:"black"}} onClick={()=>{bgchange("blue")}} variant="outline-primary">blue</Button>{' '}
      <Button name='blackk' style={{color:"black"}} onClick={()=>{bgchange("gray")}} variant="outline-secondary">Gray</Button>{' '}
      <Button name='blackk' style={{color:"black"}} onClick={()=>{bgchange("yellow")}} variant="outline-warning">Yellow</Button>{' '}
      <Button name='blackk' style={{color:"black"}} onClick={()=>{bgchange("red")}} variant="outline-danger">Red</Button>{' '}
      <Button name='blackk' style={{color:"black"}} onClick={()=>{bgchange("#ffff")}} variant="outline-info">Reset</Button>{' '}



    </div>
  )
}

export default App


