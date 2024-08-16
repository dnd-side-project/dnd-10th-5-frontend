import { useEffect, useSyncExternalStore } from 'react';
import * as styles from './toast.css';
import { type Toast, toastStore } from './toast.store';
import { Flex } from '../layout';
import { Portal } from '../portal';
import { Heading, Link } from '../typography';

type ToastProps = Toast;

function Toast(props: ToastProps) {
  const { id, message, duration, link } = props;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      toastStore.close(id);
    }, duration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [duration, id]);

  return (
    <Flex
      width="100%"
      paddingY={15}
      paddingX={28}
      justify="between"
      align="center"
      className={styles.toastItem}
    >
      <Heading as="h5" weight="semibold" className={styles.toastItemText}>
        {message}
      </Heading>
      {link && (
        <Link color="gray400" href={link}>
          바로가기
        </Link>
      )}
    </Flex>
  );
}

export function ToastProvider() {
  const toastState = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState,
  );

  const toastList = (
    <Flex
      position="fixed"
      width={780}
      bottom={10}
      left="0"
      right="0"
      margin="0 auto"
      direction="column"
      gap={10}
    >
      {toastState.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </Flex>
  );

  return <Portal>{toastList}</Portal>;
}
