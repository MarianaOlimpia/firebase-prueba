import { useState } from 'react';
import {db} from '../firebase/firebaseConfig';
import '../assets/styles/Comments.css';
import { useAuth } from '../AuthContext';
import { commentSuccess } from './Notifications';

const NewComment = () => {
    const { currentUser } = useAuth();
    const [comment, setComment] = useState({
        email: currentUser.email, 
        uid: currentUser.uid,
        deleted: false,
        deletedBy: '',
        content: ''
    })
    const resetStateComment = {
        email: currentUser.email, 
        uid: currentUser.uid,
        deleted: false,
        deletedBy: '',
        content: ''
    }

    const saveComment = async () => {
        comment.timestamp = Date.now();
        await db.collection('comments').doc().set(comment);
        commentSuccess();
        setComment({ ...resetStateComment });
    }

    return ( 
        <div className='comment-container'>
            <h2>Nuevo comentario</h2>
            <textarea 
                placeholder='Escribe aquí tu comentario...' 
                value={comment.content} 
                onChange={e=> setComment({...comment, content: e.target.value})}
            />
            <button onClick={saveComment}>COMENTAR</button>
        </div>
     );
}
 
export default NewComment;