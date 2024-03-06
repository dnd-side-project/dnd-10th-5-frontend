export type Toast = {
  id: number;
  message: string;
  duration?: number;
  link?: string;
};

type ToastState = Toast[];

type ToastMethods = {
  showToast: (toastOptions: Omit<Toast, 'id'>) => void;
  deleteToast: (id: number) => void;
};

type ToastStore = ToastMethods & {
  getState: () => ToastState;
  subscribe: (onStoreChange: () => void) => () => void;
};

let state: ToastState = [];
const listeners = new Set<() => void>();

function setState(setStateFn: (state: ToastState) => ToastState) {
  state = setStateFn(state);

  listeners.forEach((listener) => {
    listener();
  });
}

export const toastStore: ToastStore = {
  getState: () => state,
  subscribe: (listener) => {
    listeners.add(listener);

    return () => {
      setState(() => []);
      listeners.delete(listener);
    };
  },
  showToast: ({ message, duration = 2000, link }) => {
    const newToast: Toast = {
      id: Date.now(),
      message,
      duration,
      link: link ?? '',
    };

    setState((prevState) => [...prevState, newToast]);
  },
  deleteToast: (id) => {
    setState((prevState) => prevState.filter((toast) => toast.id !== id));
  },
};
