import { type Toast, toastStore } from '@favolink/stores';
import { classNames } from '@favolink/utils';
import { useEffect, useSyncExternalStore } from 'react';
import * as styles from './styles.css';
import Box from '../Box';
import Heading from '../Heading';
import Link from '../Link';
import Portal from '../Portal';

const TOAST_CLASSNAME = 'favolink-toast';

export function ToastProvider() {
  const toastState = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
  );

  const toastList = (
    <Box className={classNames(`${TOAST_CLASSNAME}__list`, styles.container)}>
      {toastState.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </Box>
  );

  return <Portal type="toast">{toastList}</Portal>;
}

export type ToastProps = Toast;

export default function Toast(props: ToastProps) {
  const { id, message, duration, link } = props;

  const { deleteToast } = toastStore;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      deleteToast(id);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [deleteToast, duration, id]);

  return (
    <Box className={classNames(`${TOAST_CLASSNAME}__item`, styles.item)}>
      <Heading as="h5" weight="semibold" className={classNames(styles.text)}>
        {message}
      </Heading>
      {link && (
        <Link color="gray" href={link}>
          바로가기
        </Link>
      )}
    </Box>
  );
}
