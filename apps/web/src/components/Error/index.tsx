import type { AxiosError } from 'axios';
import type { FallbackProps } from 'react-error-boundary';
import * as styles from './styles.css';

type ErrorProps = Omit<FallbackProps, 'error'> & {
  error: AxiosError;
};

export default function Error(props: ErrorProps) {
  const { resetErrorBoundary, error } = props;

  return (
    <div className={styles.center}>
      <h1 className={styles.title}>{error.response?.status}</h1>
      <p className={styles.description}>{error.message}</p>
      <button
        className={styles.button}
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
