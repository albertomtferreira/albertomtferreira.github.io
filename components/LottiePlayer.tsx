"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottiePlayerProps {
  src: any; // JSON animation data
  className?: string;
  style?: React.CSSProperties;
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
