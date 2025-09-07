import React from "react";

const PrevButton = (props) => (
  <button {...props} aria-label="Prev" style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="-5" y="-5" width="70" height="70">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(2.5px)',clipPath:'url(#bgblur_0_78_959_clip_path)',height:'100%',width:'100%'}}></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="5">
        <rect width="60" height="60" rx="10" transform="matrix(-1 0 0 1 60 0)" fill="#FBFEFB" fillOpacity="0.4" />
        <path d="M38.1439 13.7115L21.856 30.0005L38.1439 46.2885" stroke="#353535" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="bgblur_0_78_959_clip_path" transform="translate(5 5)">
          <rect width="60" height="60" rx="10" transform="matrix(-1 0 0 1 60 0)" />
        </clipPath>
      </defs>
    </svg>
  </button>
);

export default PrevButton;
