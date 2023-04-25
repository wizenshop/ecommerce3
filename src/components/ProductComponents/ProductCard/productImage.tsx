"use client";
import Image from "next/image";
import * as Style from "./styles";

import { useState } from "react";

export function ProductImage({ currentImagePath, hoverImagePath,aliasImageName }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Style.ProductImage
        src={isHovering ? hoverImagePath : currentImagePath}
        width={500}
        height={500}
        alt={aliasImageName}
        placeholder={aliasImageName}
      />
    </div>
  );
}
