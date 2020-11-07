import { useState } from 'react';
import {db} from '../firebase/firebaseConfig';
import '../assets/styles/Comments.css';
import { useAuth } from '../AuthContext';

const NewComment = () => {
    const { currentUser } = useAuth();
    const [comment, setComment] = useState({
        email: currentUser.email, 
        content: ''
    })
    const resetStateComment = {
        email: currentUser.email,
        content: ''
    }

    const saveComment = async () => {
        comment.fecha = Date.now();
        await db.collection('comments').doc().set(comment);
        alert('Comentario guardado con éxito')
        setComment({ ...resetStateComment });
    }

    return ( 
        <div className='comment-container'>
            <h2>Nuevo comentario</h2>
            <textarea 
                placeholder='Escribe aquí tu comentario' 
                value={comment.content} 
                onChange={e=> setComment({...comment, content: e.target.value})}
            />
            <button onClick={saveComment}>COMENTAR</button>
        </div>
     );
}
 
export default NewComment;