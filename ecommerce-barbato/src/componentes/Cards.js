import React from 'react';

function Cards(props) {
    return (
      <>
        <h3>{props.marca}</h3>
        <div>{props.color}</div>
      </>
    );
}
export default Cards;