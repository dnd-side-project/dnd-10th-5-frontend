import { createIcon } from './icon';

export const TrashIcon = createIcon({
  defaultProps: {
    width: '1em',
    height: '1em',
    fill: 'none',
  },
  path: (
    <path
      d="M5 7.14286H15M13.5714 7.14286V13.5714C13.5714 14.3604 12.9319 15 12.1429 15H7.85714C7.06816 15 6.42857 14.3604 6.42857 13.5714V7.14286M12.1429 7.14286V6.42857C12.1429 5.63959 11.5033 5 10.7143 5H9.28571C8.49674 5 7.85714 5.63959 7.85714 6.42857V7.14286H12.1429Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});
