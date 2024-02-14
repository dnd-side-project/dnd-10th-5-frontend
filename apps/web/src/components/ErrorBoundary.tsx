import { QueryErrorResetBoundary } from '@tanstack/react-query';
import {
  ErrorBoundary as ReactErrorBoundary,
  type ErrorBoundaryProps as ReactErrorBoundaryProps,
} from 'react-error-boundary';

export default function ErrorBoundary(props: ReactErrorBoundaryProps) {
  const { children, ...restProps } = props;

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary {...restProps} onReset={reset}>
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
