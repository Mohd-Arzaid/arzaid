"use client";

import Image from "next/image";
import { useState } from "react";

export const BlurImage = ({ src, className = "", alt = "", ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={`transition duration-500 ${
        isLoading ? "blur-sm scale-100" : "blur-0 scale-100"
      } ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};
