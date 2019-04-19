import React from 'react';
import Card from './Card';

const cardInfo = [
  {
    image: 'ceramics.jpeg',
    name: 'name area',
    position: 'postion area they work in',
    details: 'details about the person  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L'
  }
];

function Sake() {
  return (
    <div>
      <style jsx>{`
        div{
          display: flex;
          flex-direction:row;
          flex-wrap: wrap;
          border: solid 1px red
        }
        `}</style>
      {cardInfo.map((card, index) =>
        <Card image={card.image}
          name={card.name}
          position={card.position}
          details={card.details}
          key={index}/>
      )}
    </div>
  );
}

export default Sake;
