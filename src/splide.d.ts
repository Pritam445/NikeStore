declare module '@splidejs/react-splide' {
  import * as React from 'react';

  export interface SplideProps {
    options?: Record<string, any>;
    hasTrack?: boolean;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps {
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}
