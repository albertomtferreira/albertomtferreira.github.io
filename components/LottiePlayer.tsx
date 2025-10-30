'use client';

import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

interface LottiePlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function LottiePlayer({ src, className, style }: LottiePlayerProps) {
  return (
    <Player
      src={src}
      className={className}
      loop
      autoplay
      style={style}
    />
  );
}
