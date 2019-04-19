import React from 'react';
import Main from './Main';

const cardInfo = [
  {
    image: 'anthony.jpg',
    name: 'name area',
    position: 'postion area they work in',
    details: 'details about the person  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L'
  },
  {
    image: 'nicole.jpg',
    name: 'name area',
    position: 'postion area they work in',
    details: 'details about the person  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L'
  },
  {
    image: 'john.jpg',
    name: 'name area',
    position: 'postion area they work in',
    details: 'details about the person  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L'
  },
  {
    image: 'andrew.jpg',
    name: 'name area',
    position: 'postion area they work in',
    details: 'details about the person  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L'
  }
];

function Card() {
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
      {cardInfo.map((main, index) =>
        <Main image={main.image}
          name={main.name}
          position={main.position}
          details={main.details}
          key={index}/>
      )}
    </div>
  );
}

export default Card;
