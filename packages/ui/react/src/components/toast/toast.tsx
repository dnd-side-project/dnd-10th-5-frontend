import { cx } from '@favolink-ui/utils';
import { useEffect } from 'react';
import { type Toast, toastStore } from './toast.store';
import * as styles from './toast.styles.css';
import { Heading, Link } from '../typography';

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
    <div className={cx('favolink-toast__item', styles.toastItemBase)}>
      <Heading
        as="h5"
        weight="semibold"
        className={cx(styles.toastItemTextBase)}
      >
        {message}
      </Heading>
      {link && (
        <Link color="gray400" href={link}>
          바로가기
        </Link>
      )}
    </div>
  );
}
