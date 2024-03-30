import { type Toast, toastStore } from '@favolink/stores';
import { classNames } from '@favolink/utils';
import { useEffect } from 'react';
import * as styles from './toast.styles.css';
import { Box } from '../box';
import { Heading } from '../heading';
import { Link } from '../link';

export type ToastProps = Toast;

export function Toast(props: ToastProps) {
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
    <Box className={classNames('favolink-toast__item', styles.toastItem)}>
      <Heading
        as="h5"
        weight="semibold"
        className={classNames(styles.toastItemText)}
      >
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
