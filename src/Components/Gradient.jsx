import React from 'react'

const Gradient = () => {
  return (
    <div className='absolute bottom-0 right-0 max-w-[500px] max-h-[450px]'>
        <svg width="480" height="440" viewBox="0 0 571 571" opacity="0.3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_936_1119)">
                <ellipse cx="323.946" cy="362.775" rx="299.775" ry="243.473" transform="rotate(90 323.946 362.775)" fill="url(#paint0_linear_936_1119)"/>
            </g>
            <defs>
            <filter id="filter0_f_936_1119" x="0.473206" y="-17" width="646.946" height="759.55" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_936_1119"/>
            </filter>
            <linearGradient id="paint0_linear_936_1119" x1="623.721" y1="246.409" x2="-208.138" y2="698.65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC00FF"/>
            <stop offset="1" stopColor="#CC00FF" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
    </div>
  )
}

export default Gradient