import React from "react";
import { ProductListCard } from "../../MainPage/productListCard/ProductListCard";
import { images } from "../productCardImages/img";

export const ProductCardContainer = () => {
  return (
    <div className="productCardContainer">
      <ProductListCard
        width="300px"
        border="1px solid grey"
        padding="20px"
        borderRadius="5px"
        title="T-Shirt"
        Price="79,99$"
        Size="M-2XL"
        imageUrl={images["0"].imgUrl}
        marginBottom="10px"
        display="grid"
        gap="10px"

        
      />

      <ProductListCard
        width="300px"
        border="1px solid grey"
        padding="20px"
        borderRadius="5px"
        title="Coat"
        Price="199,89$"
        Size="S-4XL"
        imageUrl={images["1"].imgUrl}
        marginBottom="10px"
      />
      <ProductListCard
        width="300px"
        border="1px solid grey"
        padding="20px"
        borderRadius="5px"
        title=" Jacket"
        Price="109,89$"
        Size="XS-L"
        imageUrl={images["2"].imgUrl}
        marginBottom="10px"
      />
      <ProductListCard
        width="300px"
        border="1px solid grey"
        padding="20px"
        borderRadius="5px"
        title="Bomber Jacket"
        Price="99,59$"
        Size="XS-M"
        imageUrl={images["3"].imgUrl}
        marginBottom="10px"
      />
      <ProductListCard
        width="300px"
        border="3px dashed red"
        padding="20px"
        borderRadius="5px"
        color="red"
        title="Big Sale 50% Jacket"
        Price="49,99$"
        Size="Left M"
        imageUrl={images["4"].imgUrl}
        marginBottom="10px"
      />

      <ProductListCard
        width="300px"
        border="3px solid red"
        padding="20px"
        borderRadius="5px"
        title="Big Sale 70% Sweater"
        Price="29,22$"
        Size="Left S-M"
        imageUrl={images["5"].imgUrl}
        marginBottom="10px"
        color="red"
      />


      <ProductListCard
        width="300px"
        border="3px solid red"
        padding="20px"
        borderRadius="5px"
        title="Sale 30% Converse"
        Price="29,22$"
        Size="Left S-M"
        imageUrl={images["8"].imgUrl}
        marginBottom="10px"
        color="red"
      />


      <ProductListCard
        width="300px"
        border="3px solid red"
        padding="20px"
        borderRadius="5px"
        title="Big Sale 70% Sweater"
        Price="29,22$"
        Size="Left S-M"
        imageUrl={images["6"].imgUrl}
        marginBottom="10px"
        color="red"
      />


      <ProductListCard
        width="300px"
        border="3px solid red"
        padding="20px"
        borderRadius="5px"
        title="Cap"
        Price="34,22$"
        Size="Standart"
        imageUrl={images["7"].imgUrl}
        marginBottom="10px"
      
      />
    </div>
  );
};
