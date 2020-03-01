import React from 'react'
import { useDrag } from 'react-dnd'
import "./home.scss";

const Box = ({ name, placeName, id, onChangeDnd }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, name, placeName, type: 'box' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onChangeDnd(item, dropResult)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;
  return (
    <div
      className={`box ${isDragging ? 'swing' : ''}`}
      ref={drag}
      style={{ opacity }}
    >
      {name}
    </div>
  )
};
export default Box
