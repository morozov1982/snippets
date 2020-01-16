import React from 'react';
import stl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="summer beach"/>
            </div>
            <div className={stl.description}>ava + description</div>
        </div>
    );
}

export default ProfileInfo;