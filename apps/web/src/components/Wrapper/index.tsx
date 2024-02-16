import { type ReactNode, Suspense } from 'react';
import { Error, ErrorBoundary } from './components';

type WrapperProps = {
  element: ReactNode;
  suspenseFallback?: ReactNode;
};

export default function Wrapper(props: WrapperProps) {
  const { element, suspenseFallback } = props;

  return (
    <ErrorBoundary fallbackRender={(props) => <Error {...props} />}>
      <Suspense fallback={suspenseFallback ?? <h1>Loading...</h1>}>
        {element}
      </Suspense>
    </ErrorBoundary>
  );
}
