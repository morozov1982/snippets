//import React from 'react'; // 1-я версия
import React, { Component } from 'react'; // 2-я версия
//import axios from 'axios'; // Убрал на 40 уроке (Redux)
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

/*const Home = () => { // 1-я версия
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia magnam corporis perferendis necessitatibus possimus dolorum nihil cum ullam consequatur repudiandae assumenda quos, cumque alias eveniet id dicta beatae nam?</p>
        </div>
    )
};*/

class Home extends Component { // 2-я версия
    /*state = { // Было до Redux (40 урок)
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0,10)
                })
            });
    };*/

    render() {
        console.log(this.props);
        //const { posts } = this.state;
        const { posts } = this.props; // Redux
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    };
}

const mapStateToProps = (state) => { // Redux
    return {
        posts: state.posts
    }
}

//export default Home;
export default connect(mapStateToProps)(Home); // Redux