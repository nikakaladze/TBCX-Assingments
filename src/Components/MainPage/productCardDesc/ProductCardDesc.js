import React from 'react'

export const ProductCardDesc = (props) => {
  const Price = props.Price;
  const Size = props.Size;


  return (
    <div >
      <p style={{
        fontSize: props.fontSize,
        display: props.display,
        marginRight: props.marginRight,
        color: props.color,




      }}>Price: {Price},
      </p>
      <span style={{ fontSize: props.fontSize }}>Size:{Size}</span>
    </div>
  )
}
