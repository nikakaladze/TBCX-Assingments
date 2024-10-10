import React from 'react'
import { ProductListCardTitle } from '../productListCardTitle/ProductListCardTitle'
import { ProductCardImages } from '../productCardImages/ProductCardImages'
import { ProductCardDesc } from '../productCardDesc/ProductCardDesc'
import { ProductCardButton } from '../../MainPage/productCardButton/ProductCardButton';

export const ProductListCard = (props) => {
  return (
    <div style={{
      border: props.border,
      padding: props.padding,
      borderRadius: props.borderRadius,
      width: props.width,
      backgroundColor: props.backgroundColor,
      display: 'grid',
      gap: '10px',
      padding: '20px',
      border: 'none',
      borderRadius: "12px",
      backgroundColor: 'white',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box - shadow 0.3s ease',
      cursor: " pointer",
      display: "flex",
      flexDirection: 'column',
      justifyContent: "spaceBetween",
      height:'100%'
      
      



    }}>
      <ProductListCardTitle title={props.title} marginBottom={props.marginBottom} color={props.color} />
      <ProductCardImages max-width='120px' borderRadius="5px" imageUrl={props.imageUrl} />

      <ProductCardDesc Price={props.Price}
        Size={props.Size}
        display="inline"
        fontSize="18px"
        marginRight="30px"
        color={props.color}
      />


      <ProductCardButton padding="10px 32px"
        fontSize="18px"
        backgroundColor="blue"
        color="white"
        border="none"
        borderRadius="5px"
        cursor="pointer"

      />


    </div>
  )
}


