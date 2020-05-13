import React, {Component} from 'react';

export default class CommentsListItem extends Component {

    render() {
        const {commentAuthor, commentText, commentDate, deleteComment} = this.props;

        return (
            <div className="comment-wrapper">
                <p className="comment-author">{commentAuthor}</p>
                <p className="comment-text">{commentText}</p>
                <p className="comment-date">{commentDate}</p>
                <button
                    className="delete-comment"
                    onClick={deleteComment}
                />
            </div>

        );
    }
};
