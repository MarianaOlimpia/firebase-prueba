import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const commentSuccess = () => {
    toast.success('Comentario publicado exitosamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
    })
}

export const commentDelete = () => {
    toast.success('Comentario eliminado', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
    })
}

export const errorMessage = (err) => {
    toast.error(err, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
    })
}