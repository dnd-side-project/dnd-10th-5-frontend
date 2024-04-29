import { createContext } from '@favolink-ui/system';
import type * as styles from './tag.styles.css';

type TagStylesContextDefaultValue = {
  size: styles.TagSize;
};

export const [TagStylesContextProvider, useTagStylesContext] =
  createContext<TagStylesContextDefaultValue>({
    size: 'small',
  });
