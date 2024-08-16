import { FavolinkStore, type FavolinkStoreObserver } from '../../store';

export type Toast = {
  id: number;
  message: string;
  duration?: number;
  link?: string;
};

export type ToastNotifyOptions = {
  id?: number;
  message: string;
  duration?: number;
  link?: string;
};

interface ToastStoreObserver extends FavolinkStoreObserver<Toast[]> {
  notify: (options: ToastNotifyOptions) => void;
  close: (id: number) => void;
  closeAll: () => void;
}

class ToastStore extends FavolinkStore<Toast[]> implements ToastStoreObserver {
  private counter = 0;

  constructor(initialState: Toast[] = []) {
    super(initialState);
  }

  notify = (options: ToastNotifyOptions) => {
    this.counter += 1;

    const { message, duration = 3000, link = '' } = options;

    const newToast: Toast = {
      message,
      id: options.id ?? this.counter,
      duration,
      link,
    };

    this.setState((prevToasts) => [...prevToasts, newToast]);
  };

  close = (id: number) => {
    this.setState((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id),
    );
  };

  closeAll = () => {
    this.setState([]);
  };
}

export const toastStore = new ToastStore();
