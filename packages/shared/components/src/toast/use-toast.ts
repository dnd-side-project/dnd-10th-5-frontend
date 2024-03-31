import { toastStore } from './toast.store';

export function useToast() {
  const { showToast, deleteToast } = toastStore;

  return {
    show: showToast,
    delete: deleteToast,
  };
}
