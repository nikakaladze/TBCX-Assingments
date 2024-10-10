import React from 'react'

export const ProductListCardTitle = (props) => {


  return (
    <div>

      <h4 style={{
        marginBottom: props.marginBottom,
        color: props.color
      }}>{props.title}</h4>
    </div>
  )
}
