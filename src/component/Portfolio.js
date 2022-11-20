import React from 'react';
import Card from './Card'
import projectArr from './projectArr';

const cardElements = projectArr.map((item) => {
  return (
    <Card
      href={item.href} title={item.title} content={item.content} />
  )
})
export default function Portfolio() {
  return(
    <div className="row-cols-2">
      {cardElements}
    </div>
  );
}