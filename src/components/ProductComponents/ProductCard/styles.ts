import { styled, keyframes,css } from "../../../styles";
import Image from "next/image";

export const CardProductContainer = styled("section", {
  position: "relative",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  transition: "box-shadow 0.3s ease-in-out",

  

  variants: {
    hover: {
      true: {
        transform: "translateY(-5px) scale(1.05)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
});

const ProductTitle = styled("h2", {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "8px",
});

const ProductPrice = styled("span", {
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const ProductImage = styled(Image, {
  // Estilos CSS para a imagem do produto
  maxWidth: "100%",
  transition: "transform 0.3s ease-in-out",

  "&:hover, &:focus": {
    transform: "scale(1.05)",
  },

  animation: `${fadeIn} 0.2s ease-out`,
  "&:hover": {
    animation: `${fadeOut} 0.2s ease-out`,
    animationFillMode: "forwards",
  },
});

const ProductSavings = styled("div", {
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#e6f4ea",
  color: "#3b8d5a",
  padding: "4px 8px",
  borderRadius: "4px",
  fontWeight: "bold",
  variants: {
    size: {
      small: {
        fontSize: "12px",
      },
      medium: {
        fontSize: "16px",
      },
      large: {
        fontSize: "24px",
      },
    },
  },
});
