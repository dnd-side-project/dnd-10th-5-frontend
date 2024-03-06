import { toastStore } from '@favolink/stores';

export default function useToast() {
  const { showToast, deleteToast } = toastStore;

  return {
    show: showToast,
    delete: deleteToast,
  };
}
