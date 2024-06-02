import { createContext } from '@favolink-ui/system';
import type * as styles from './tag.styles.css';

type TagStylesContextDefaultValue = {
  size: Exclude<Exclude<styles.TagVariants, undefined>['size'], undefined>;
};

export const [TagStylesContextProvider, useTagStylesContext] =
  createContext<TagStylesContextDefaultValue>({
    name: 'TagStylesContext',
    hookName: 'useTagStylesContext',
    providerName: '<TagStylesProvider />',
  });
