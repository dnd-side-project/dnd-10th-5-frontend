import { toastStore } from '@favolink/stores';

export function useToast() {
  const { showToast, deleteToast } = toastStore;

  return {
    show: showToast,
    delete: deleteToast,
  };
}
