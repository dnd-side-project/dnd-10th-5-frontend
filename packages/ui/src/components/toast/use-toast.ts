import { useMemo } from 'react';
import { type ToastNotifyOptions, toastStore } from './toast.store';

export function useToast() {
  return useMemo(() => {
    function toast(options: ToastNotifyOptions) {
      return toastStore.notify(options);
    }

    toast.close = (id: number) => toastStore.close(id);

    toast.closeAll = () => toastStore.closeAll();

    return toast;
  }, []);
}
