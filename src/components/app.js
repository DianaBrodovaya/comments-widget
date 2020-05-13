import React, {Component} from 'react';
import CommentsList from "./comments-list";
import CommentAddForm from "./comment-add-form";

export default class App extends Component {
    newId = 100;
    state = {
        commentsData: [
            this.loadComment('Author1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
                ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
                'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
                'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '01.01.2020 16:10:59', 1),
            this.loadComment('Author2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua', '02.02.2020 20:51:33', 2),
            this.loadComment('Author3', 'Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
                'qui officia deserunt mollit anim id est laborum', '03.03.2020 22:30:42', 3)
        ]
    };

    componentDidMount = () => {
        this.setState(() => {
            let fromStorage = localStorage.getItem('arrayWithComments');
            if (fromStorage !== null) {
                return {
                    commentsData: (JSON.parse(fromStorage))
                }
            }
        });
    };

    saveToLocalStorage(arrayToSave) {
        localStorage.setItem('arrayWithComments', JSON.stringify(arrayToSave));
    }

    loadComment(commentAuthor, commentText, commentDate, id) {
        return {
            commentAuthor,
            commentText,
            commentDate,
            id
        }
    };

    createComment(commentAuthor, commentText) {
        return {
            commentAuthor,
            commentText,
            commentDate: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            id: this.newId++
        }
    };

    addComment = (commentAuthor, commentText) => {
        const newItem = this.createComment(commentAuthor, commentText);
        this.setState(({commentsData}) => {

            const newArr = [
                ...commentsData,
                newItem
            ];
            this.saveToLocalStorage(newArr);

            return {
                commentsData: newArr
            }
        });
    };

    deleteComment = (id) => {
        this.setState(({commentsData}) => {
            const idx = commentsData.findIndex((el) => el.id === id);

            const newArray = [
                ...commentsData.slice(0, idx),
                ...commentsData.slice(idx + 1)
            ];
            this.saveToLocalStorage(newArray);
            return {
                commentsData: newArray
            };
        });
    };

    render() {
        return (
            <div className="main-wrapper">
                <h1>Комментарии</h1>
                <CommentsList
                    comments={this.state.commentsData}
                    deleteComment={this.deleteComment}
                />
                <CommentAddForm addComment={this.addComment}/>
            </div>
        )
    };
};
