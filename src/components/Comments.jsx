import '../assets/styles/Comments.css';
import deleteBtn from '../assets/borrar.svg';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig'
import Loading from './Loading';

const Comments = () => {
    const [comments, setComments] = useState();
    console.log(comments)

    const getComments = async () => {
        let comments = db.collection('comments').orderBy('fecha', 'desc');
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
        <h2>Comentarios existentes</h2>
        {comments ?
            comments.map((item, index) => 
            <div key={index}>
                <div className='comment-container'>{item.content}</div>
                <div>
                    <img src={deleteBtn} alt='eliminar comentario' className='delete-btn'/>
                    <span>{item.email}</span>
                </div>
            </div>
        ) 
        : <Loading/>
        }
        
        </div>
     );
}
 
export default Comments;