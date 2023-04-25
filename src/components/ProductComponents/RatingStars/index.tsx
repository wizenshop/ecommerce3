import React from "react";

interface InumberStars {
  numberStars: number;
}

export function RatingStars({ numberStars }: InumberStars) {

  // arredonda o número de estrelas para uma casa decimal
  const arredondado = Math.round(numberStars * 10) / 10;

  // cria um array com 5 elementos, preenchidos com true ou false
  const estrelas = Array(5)
    .fill(false)
    .map((_, index) => {
      return index < Math.round(numberStars);
    });

  // renderiza as estrelas como ícones preenchidos ou vazios
  const estrelasRenderizadas = estrelas.map((cheia, index) => {
    const icone = cheia ? "★" : "☆";
    return <span key={index}>{icone}</span>;
  });

  return (
    <div>
      {estrelasRenderizadas} {arredondado}
    </div>
  );
}
