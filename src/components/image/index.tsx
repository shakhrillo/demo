import React, { FC } from 'react';

import './index.css';

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  opacity?: number;
  borderRadius?: number;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

export const PuImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  opacity,
  borderRadius,
  onLoad,
  onError,
  loading,
}) => (
  <img
    src={src}
    alt={alt}
    style={{ width, height, opacity, borderRadius }}
    onLoad={onLoad}
    onError={onError}
    loading={loading}
  />
);
