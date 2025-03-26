import React, { Suspense } from 'react';
import placeholderImage from '../assets/welcome-placeholder.png'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

{/* <img src={placeholderImage.src} /> */}
export default function Scene() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Spline scene="https://prod.spline.design/EgnnVtmMIwfPumjP/scene.splinecode" loading="eager" />
    </Suspense>
  );
}
