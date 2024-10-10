import React from 'react'

export const ProductCardButton = ({ padding, backgroundColor, color, border, borderRadius, fontSize, cursor,margin }) => {

  return (
    <button style={{
      padding,
      backgroundColor,
      
      color,
      border,
      borderRadius,
      fontSize,
      cursor,
      margin,


    }}>Add to cart </button>
  )
}
