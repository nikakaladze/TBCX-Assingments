import React from 'react';



export const ProductCardImages = (props) => {

    
   return (
    <div >
        <img src={props.imageUrl}  alt="Bombers"
                               style={{
                                width:props.width}}

        />

      
    </div>
  )
}

