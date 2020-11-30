import React from 'react';
import Comment from './Comment.js'

const CommentList = ({comments}) => {
    const commentNodes = comments.map(comment => {
        return(
            <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        )
    }
    )

    return(
        <div className="comment-list">
            {commentNodes}
        </div>
    )
}

export default CommentList;