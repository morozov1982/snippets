import React from 'react';
import stl from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    } 

    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="summer beach"/>
            </div>
            <div className={stl.description}>
                <img src={props.profile.photos.large} alt='' />
                <div>Обо мне: {props.profile.aboutMe}</div>
            </div>
        </div>
    );                                                                                                                                                                                                  
}

export default ProfileInfo;