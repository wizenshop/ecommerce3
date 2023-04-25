/*

import Slider from "react-slick";
import { styled } from "../../../styles"
import { Product } from "../../../types/product";
import {  ProductCard } from "../ProductCard"

const ProductSliderContainer = styled("div", {
  maxWidth: "100%",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  display: "flex",
});



interface ProductsContainerProps {
  products: Product[];
}

export function ProductCarrosselContainer({ products }: ProductsContainerProps ) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ProductSliderContainer>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </ProductSliderContainer>
  );
}

*/