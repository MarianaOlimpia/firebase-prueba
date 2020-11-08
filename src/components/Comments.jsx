import '../assets/styles/Comments.css';
import deleteBtn from '../assets/borrar.svg';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig'
import Loading from './Loading';
import { useAuth } from '../AuthContext';
import { commentDelete, errorMessage } from './Notifications';

const Comments = () => {
    const { currentUser } = useAuth();
    const [comments, setComments] = useState();

    // const deleteComments = (id) => {
    //     db.collection("comments").doc(id).delete().then(function() {
    //         commentDelete();
    //     }).catch(function(error) {
    //         errorMessage(error);
    //     });
    // }
    const deleteComments = (id) => {
            db.collection('comments').doc(id).update({
                deleted: true,
                deletedBy: currentUser.uid,
            }).then(() => {
                commentDelete();
            })
            .catch((error) => {
                errorMessage(error);
            });
    }

    const getComments = async () => {
        let comments = db.collection('comments').where("deleted", "==", false).orderBy('timestamp', 'desc');
        comments.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setComments(docs);
        });
    }

    useEffect(() => {
        getComments();
    }, [])

    return ( 
        <div className='comment-container display-comments'>
        <h2 className='existentes'>Comentarios existentes</h2>
        <h2 className='lista'>Lista de comentarios</h2>
        {comments ?
            comments.map((item, index) => 
            <div key={index}>
                <div className='comment-container-text'>{item.content}</div>
                <div className='comment-options'>
                    <img src={deleteBtn} alt='eliminar comentario' className='delete-btn' onClick={() => deleteComments(item.id)} />
                    <span>Escrito por: {item.email}</span>
                </div>
            </div>
        ) 
        : <Loading/>
        }
        
        </div>
     );
}
 
export default Comments;