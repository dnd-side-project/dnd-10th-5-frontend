import { classNames } from '@favolink/utils';
import { useEffect } from 'react';
import { type Toast, toastStore } from './toast.store';
import * as styles from './toast.styles.css';
import { Box } from '../box';
import { Link } from '../link';
import { Heading } from '../typography';

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
    <Box className={classNames('favolink-toast__item', styles.toastItemBase)}>
      <Heading
        as="h5"
        weight="semibold"
        className={classNames(styles.toastItemTextBase)}
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
