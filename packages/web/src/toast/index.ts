import { toast, ToastOptions } from 'react-toastify';

const globalConfigs: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const showSuccessToast = (message: string) => {
  toast.success(message, globalConfigs);
};
