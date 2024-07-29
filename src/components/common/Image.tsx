import React from "react";

interface props {
  src: string[];
  alt: string;
  width?: number;
  height?: number;
}
/**
 * Image component to display images with alt text
 */
export const Image = ({ src, alt, width, height }: props) => {
  return <img src={src[0]} alt={alt} width={width} height={height} />;
};
