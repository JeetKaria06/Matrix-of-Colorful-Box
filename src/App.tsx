import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface boxProp {
  row: number;
  col: number;
  color: String;
}

interface matrixProp {
  rows: number;
  cols: number;
}

interface rowBuilderProp {
  row: number;
  col: number;
}

let matrix = new Array(13);
for(let i=0; i<13; i++) matrix[i] = new Array(25);

const Box = ({row, col, color}:boxProp) => {
  matrix[row][col] = color;
  const [boxColor, changeColor] = useState(color)
  const id = row.toString() + "$"+ col.toString()
  return (
    <div>
      <div
        id = {id}
        style={{height: "2cm", width: "2cm", backgroundColor: "#"+`${boxColor}`}}
        onClick={(e) => changeColor(Math.floor(Math.random()*16777215).toString(16))}
      ></div>
    </div>
  )
}

const RowBuilder = ({row, col}:rowBuilderProp) => {
  const eachRow = []
  for(let i=0; i<col; i++)
    eachRow.push(<div><Box row={row} col={i} color={Math.floor(Math.random()*16777215).toString(16)} /></div>)
  
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      {eachRow}
    </div>
  )
}

const MatrixBuilder = ({rows, cols}:matrixProp) => {
  const items = []
  for(let i=0; i<rows; i++)
  {
    items.push(<RowBuilder row={i} col={cols} />)
  }
  return (
    <div>
      {items}
    </div>
  )
}

function App() {
  let row=13, col=25;
  const item = <MatrixBuilder rows={row} cols={col}/>
  console.log(matrix)
  const [colorMatrix, changeColor] = useState(matrix)
  return (
    <div>
      {item}
    </div>
  );
}

export default App;
