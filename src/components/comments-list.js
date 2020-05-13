import React from 'react';
import CommentsListItem from "./comments-list-item";

const CommentsList = ({comments, deleteComment}) => {
    const elements = comments.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="comment">
                <CommentsListItem
                    {...itemProps}
                    deleteComment={() => deleteComment(id)}
                />
            </li>
        )
    });

    return (
      <ul className="comments-list">
          {elements}
      </ul>
    );
};

export default CommentsList;