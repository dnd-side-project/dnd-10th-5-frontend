import { cx } from '@favolink-ui/utils';
import { useSyncExternalStore } from 'react';
import { Toast } from './toast';
import * as styles from './toast.provider.styles.css';
import { toastStore } from './toast.store';
import { Portal } from '../portal';

export function ToastProvider() {
  const toastState = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
  );

  const toastList = (
    <div className={cx('favolink-toast__list', styles.toastContainerBase)}>
      {toastState.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );

  return <Portal>{toastList}</Portal>;
}
