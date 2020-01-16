//import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilesReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilesPage.postsData,
        newPostText: state.profilesPage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;