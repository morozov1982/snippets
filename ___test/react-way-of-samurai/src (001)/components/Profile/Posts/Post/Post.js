import React from 'react';
import stl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={stl.item}>
            <img src="https://res.cloudinary.com/teepublic/image/private/s--Y38Zg5B6--/t_Preview/b_rgb:fffffe,c_limit,f_jpg,h_630,q_90,w_630/v1446168486/production/designs/84775_0.jpg" alt="avatar"/>
            <div>{ props.message }</div>
            <div>Liked: { props.likes } times!</div>
            <div>Like</div>
        </div>
    );
}

export default Post;

//**************************************************//
// =======   К О Н С П Е К Т   =====================//
//**************************************************//

// props  -  принимаем из аттребутов в Posts.js