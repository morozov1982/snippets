const initState = {
    posts: [
        {id: '1', title: 'А чё это я должен повторять за ним', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus minima et tempora at repellendus autem modi quam possimus voluptatum nostrum neque libero mollitia laboriosam eum ratione illum dicta quas.'},
        {id: '2', title: 'Ладно, Лорем Ипсум подходит', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus minima et tempora at repellendus autem modi quam possimus voluptatum nostrum neque libero mollitia laboriosam eum ratione illum dicta quas.'},
        {id: '3', title: 'Лень изобретать заголовок', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus minima et tempora at repellendus autem modi quam possimus voluptatum nostrum neque libero mollitia laboriosam eum ratione illum dicta quas.'},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !==post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;