import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Kitty = (props: SvgIconProps) => (
  <SvgIcon {...props} style={{filter: 'drop-shadow(#43b3e6 0px 0px 4px)'}}>
    <path d="M6.48,0.97c0,1.03-0.81,1.84-1.84,1.84H3.73c-2.02,0-3.68,1.65-3.68,3.68s1.65,3.68,3.68,3.68h1.06
	c-0.1,0.45-0.14,0.92-0.14,1.38v11.49h1.84V11.54c0-2.79,2.27-5.06,5.06-5.06c0.83,0,1.61,0.19,2.3,0.55V5.05
	c-0.74-0.26-1.51-0.4-2.3-0.4c-2.64,0-4.93,1.5-6.09,3.68H3.73c-1.03,0-1.84-0.81-1.84-1.84S2.7,4.65,3.73,4.65h0.92
	c2.02,0,3.68-1.65,3.68-3.68H6.48z M14.76,2.89v5.89c0,2.34,2.13,4.14,4.6,4.14s4.6-1.79,4.6-4.14V2.89l-1.44,1l-1.52,1.06
	c-0.52-0.19-1.04-0.4-1.64-0.4c-0.6,0-1.11,0.22-1.64,0.4L16.19,3.9L14.76,2.89z M19.35,6.4c0.53,0,1.02,0.13,1.44,0.34L21.28,7
	l0.46-0.32l0.37-0.26v2.36c0,1.21-1.16,2.3-2.76,2.3c-1.59,0-2.76-1.09-2.76-2.3V6.43l0.37,0.26L17.43,7l0.49-0.26
	C18.36,6.51,18.85,6.4,19.35,6.4z M12.92,11.08c-2.54,0-4.6,2.06-4.6,4.6v7.35h1.84v-7.35c0-1.52,1.24-2.76,2.76-2.76
	s2.76,1.24,2.76,2.76v7.35h1.84v-7.35c0-0.89-0.25-1.71-0.69-2.41c-0.87-0.41-1.61-1.05-2.15-1.84
	C14.12,11.2,13.52,11.08,12.92,11.08z M21.19,13.55c-0.59,0.19-1.21,0.29-1.84,0.29v9.19h1.84V13.55z"
    />
  </SvgIcon>
);

export default Kitty;