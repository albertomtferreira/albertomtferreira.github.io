"use client";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import type { LottieOptions } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottiePlayerProps {
  src: LottieOptions["animationData"]; // JSON animation data
  className?: string;
  style?: CSSProperties;
}

export default function LottiePlayer({
  src,
  className,
  style,
}: LottiePlayerProps) {
  return (
    <div className={className} style={style}>
      <Lottie animationData={src} loop={true} autoplay={true} />
    </div>
  );
}
