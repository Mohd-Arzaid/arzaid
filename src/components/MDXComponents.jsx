"use client";

import Link from "next/link";
import NextImage from "next/image";
import StepLargeCustom from "@/components/StepLargeCustom";
import HighlightBox from "@/components/HighlightBox";
import Divider from "@/components/Divider";
import StepCheck from "@/components/StepCheck";

const MdxImage = ({ width, height, alt = "", ...props }) => {
  if (width && height) {
    return <NextImage width={width} height={height} alt={alt} {...props} />;
  }

  return <img alt={alt} loading="lazy" {...props} />;
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: MdxImage,
  a: CustomLink,
  HighlightBox,
  StepLargeCustom,
  Divider,
  StepCheck,
};

export default MDXComponents;
