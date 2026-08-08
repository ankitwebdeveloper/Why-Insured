import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = "h-10", imgClassName = "" }) {
  return (
    <div className="flex items-center select-none shrink-0">
      <img
        src={logoImg}
        alt="WHYINSURED"
        className={`${className} ${imgClassName} object-contain`}
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}
