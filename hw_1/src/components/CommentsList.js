import React, { useState } from 'react';
import './CommentsList.css'

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const DeleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    return (
        <div>
            <h2>Список комментариев:</h2>
            {comments.map(comment => (
                <div className='comment' key={comment.id}>
                    <p>{comment.text}</p>
                    <button className='button'  onClick={() => DeleteComment(comment.id)}> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 120 120" width="30px" height="30px" baseProfile="basic"><rect width="114.551" height="15" x="2.724" y="57.5" opacity=".35" transform="rotate(-45.001 60 65.001)"/><rect width="114.551" height="15" x="2.724" y="52.5" fill="#ff1200" transform="rotate(-45.001 60 60.001)"/><rect width="15" height="114.551" x="52.5" y="7.724" opacity=".35" transform="rotate(-45.001 60 65.001)"/><rect width="15" height="114.551" x="52.5" y="2.724" fill="#ff1200" transform="rotate(-45.001 60 60.001)"/></svg></button>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;
