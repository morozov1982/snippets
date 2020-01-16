const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  postsData: [
    {
      id: 1,
      message: "А чё, думали я по-русски писать разучился?",
      likes: 12
    },
    { id: 2, message: "Second post - а енто типа по енглишу :-)", likes: 15 }
  ],
  newPostText: '',
  profile: null
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 2
      };

      return { ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
                ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profilesReducer;