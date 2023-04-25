import * as Style from "./styles";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/product";

import { ProductImage } from "./productImage";

import { RatingStars } from "../RatingStars";

export function ProductCard({
  nameProduct,
  price,
  aliasImageName,
  hoverImageName,
  numberstars,
  realPrice,
  discountedPrice,
  quantityInstallments
}: Product) {
  const currentImagePath = `./${aliasImageName}.svg`;
  const hoverImagePath = `./${hoverImageName}.svg`;
  const productUrl = `/produtos/${aliasImageName}`

  const priceDifference = calculatePriceDifference(discountedPrice, realPrice);
  const installmentValue = calculateInstallValue(quantityInstallments, discountedPrice);

  
  return (
    <Link href={productUrl}>
      <Style.CardProductContainer hover={{ true: true }}>
        <ProductImage
          currentImagePath={currentImagePath}
          hoverImagePath={hoverImagePath}
          aliasImageName={aliasImageName}
        />
        <Style.ProductSavings size="medium">{savings}</Style.ProductSavings>
        <div>
          <Style.ProductTitle>{nameProduct}</Style.ProductTitle>
          <div>
            <RatingStars numberStars={numberstars} />

            <Style.ProductPrice>
              {price}
              <s></s>
            </Style.ProductPrice>
          </div>
        </div>
      </Style.CardProductContainer>
    </Link>
  );
}

function calculatePriceDifference(realPrice: number, discountedPrice: number) {
  const difference = Math.abs(realPrice - discountedPrice);
  return difference;
}

function calculateInstallValue(quantityInstallments: number, amount: number) {
  if (quantityInstallments === 0 || amount < 0) {
    return 0;
  }

  const installmentValue = amount / quantityInstallments;
  return installmentValue;
}



export function skeletonCartProduct() {
  return <Style.SkeletonProduct></Style.SkeletonProduct>;
}
