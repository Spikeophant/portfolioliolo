import React from 'react';
import Card from './Card'
import { projectArr } from './projectArr';

const cardElements = projectArr.map((item, index) => {
  return (
    <Card
      href={item.href} title={item.title} content={item.content} key={index} />
  )
})
const styles = {
  row: {
    display: 'flex',
  }
}
export default function Portfolio() {
  return(
    <div className="row">
      {cardElements}
    </div>
  );
}