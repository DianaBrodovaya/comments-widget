import React, {Component} from 'react';

export default class CommentAddForm extends Component {
    state = {
        commentAuthor: '',
        commentText: ''
    };

    addCommentAuthor = (e) => {
        this.setState({
            commentAuthor: e.target.value
        });
    };

    addCommentText = (e) => {
        this.setState({
            commentText: e.target.value
        });
    };

    submitCommentForm = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.commentAuthor, this.state.commentText);
        this.setState({
            commentAuthor: '',
            commentText: ''
        })
    };

    render() {
        return (
            <div>
                <p>Добавить комментарий:</p>
                <form
                    className="comment-form"
                    onSubmit={this.submitCommentForm}>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        onChange={this.addCommentAuthor}
                        value={this.state.commentAuthor}
                    />
                    <textarea
                        placeholder="Ваш комментарий"
                        onChange={this.addCommentText}
                        value={this.state.commentText}
                    />
                    <button className="add-comment">Добавить</button>
                </form>
            </div>
        );
    }
}