import { createIcon } from './icon';

export const CancelIcon = createIcon({
  defaultProps: {
    width: '1em',
    height: '1em',
    viewBox: '0 0 16 16',
    fill: 'none',
  },
  path: (
    <>
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M10.5 10.5L8 8M8 8L5.5 5.5M8 8L10.5 5.5M8 8L5.5 10.5"
        stroke="white"
        strokeLinecap="round"
      />
    </>
  ),
});
