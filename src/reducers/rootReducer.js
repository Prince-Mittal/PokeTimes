
const initState = {
    posts: [
        {id: '1', title:'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem.'},
        {id: '2', title:'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem.'},
        {id: '3', title:'A Helix Fossil was found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem.'}
    ]
}
const rootReducer  = (state = initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;

