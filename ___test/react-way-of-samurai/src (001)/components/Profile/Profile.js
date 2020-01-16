import React from 'react';
//import stl from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    let postsData = props.profilesPage.postsData;

    return (
        <div>
            <ProfileInfo />
            <Posts postsData={postsData} newPostText={props.profilesPage.newPostText} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;