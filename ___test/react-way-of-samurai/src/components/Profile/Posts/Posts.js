import React from 'react';
import stl from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

    let postsData = props.postsData;

    let postsElements = postsData.map (
        p => <Post likes={p.likes} message={p.message} key={p.id} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {                                                                                   
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={stl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default Posts;