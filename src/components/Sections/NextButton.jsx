import React from "react";

const NextButton = (props) => (
  <button {...props} aria-label="Next" style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="-5" y="-5" width="70" height="70">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(2.5px)',clipPath:'url(#bgblur_0_78_960_clip_path)',height:'100%',width:'100%'}}></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="5">
        <rect width="60" height="60" rx="10" fill="#FBFEFB" fillOpacity="0.4" />
        <path d="M21.8556 13.7115L38.1436 30.0005L21.8556 46.2885" stroke="#353535" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="bgblur_0_78_960_clip_path" transform="translate(5 5)">
          <rect width="60" height="60" rx="10" />
        </clipPath>
      </defs>
    </svg>
  </button>
);

export default NextButton;
