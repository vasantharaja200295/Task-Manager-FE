import { toast } from "sonner";

export function toastMessage( type, message ) {
    if (type === 'success') {
        toast.success(message);
    }else if (type === 'error') {
        toast.error(message || 'Some error has occured');
    } else if (type === 'warning') {
        toast.warn(message);
    } else if (type==='info') {
        toast.info(message);
    }
}
