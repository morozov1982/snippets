import React from 'react';
import stl from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profilesReducer';

const Posts = (props) => {

    let postsData = props.postsData;

    let postsElements = postsData.map (
        p => <Post likes={p.likes} message={p.message} key={p.id} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {                                                                                   
        /* props.addPost();
        props.dispatch({type: 'ADD-POST'}); */
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        
        /* props.updateNewPostText(text); */
        /* let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action); */
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={stl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default Posts;

//**************************************************//
// =======   К О Н С П Е К Т   =====================//
//**************************************************//

// <Post likes='' message='' />  -  likes и message - props,
                            // передающиеся в компанент Post.js