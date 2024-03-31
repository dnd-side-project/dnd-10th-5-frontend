import { classNames } from '@favolink/utils';
import { useSyncExternalStore } from 'react';
import { Toast } from './toast';
import * as styles from './toast.provider.styles.css';
import { toastStore } from './toast.store';
import { Box } from '../box';
import { Portal } from '../portal';

export function ToastProvider() {
  const toastState = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
  );

  const toastList = (
    <Box className={classNames('favolink-toast__list', styles.toastContainer)}>
      {toastState.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </Box>
  );

  return <Portal type="toast">{toastList}</Portal>;
}
