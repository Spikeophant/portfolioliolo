import React from 'react';
import Card from './Card'
import { projectArr } from './projectArr';

const cardElements = projectArr.map((item, index) => {
  return (
    <Card
      href={item.href} title={item.title} content={item.content} deployment={item.deployment} key={index} />
  )
})

export default function Portfolio() {
  return(
    <div className="row">
      {cardElements}
    </div>
  );
}