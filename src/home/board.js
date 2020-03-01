import React from 'react'
import { useDrop } from 'react-dnd'
import Box from "./Box";
import './home.scss'

const Board = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop: () => ({ name: props.name }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  return (
    <div
      ref={drop}
      className={`board ${isActive ? "onSection" : ''}`}
    >
      {props.items.map((item, i) => {
        return <Box onChangeDnd={props.onChangeDnd} key={i} id={item.id} name={item.content} placeName={props.name} />
      })}
    </div>
  )
};
export default Board
