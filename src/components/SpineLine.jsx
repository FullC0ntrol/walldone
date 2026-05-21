import React from 'react';
import { useScrollProgress } from '../hooks';

export default function SpineLine() {
  const progress = useScrollProgress();

  return (
    <div className="spine-line hidden lg:block">
      <div
        className="spine-progress"
        style={{ height: `${progress * 100}%` }}
      />
      <div
        className="spine-dot"
        style={{ top: `${progress * 100}%` }}
      />
    </div>
  );
}
