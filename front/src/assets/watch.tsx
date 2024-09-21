import React from 'react';

export const WatchIc = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={24}
    height={24}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d='M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z'
      stroke='currentColor'
      strokeWidth='1.5'
    />
    <path d='M9 22H15' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    <path d='M9 2H15' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    <path
      d='M10 10L13 13M15 9L11 13'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
