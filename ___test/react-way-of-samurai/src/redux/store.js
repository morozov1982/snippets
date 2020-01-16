import profilesReducer from "./profilesReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilesPage: {
      postsData: [
        {
          id: 1,
          message: "А чё, думали я по-русски писать разучился?",
          likes: 12
        },
        { id: 2, message: "Second post - а енто типа по енглишу :-)", likes: 15 }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Тимофей" },
        { id: 2, name: "Ирина" },
        { id: 3, name: "Таисия" },
        { id: 4, name: "Эммануил" },
        { id: 5, name: "Татьяна" },
        { id: 6, name: "Екатерина" },
        { id: 7, name: "Михаил" }
      ],
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "Пащёль нафик, с новым годом!" },
        { id: 3, message: "Свежая шутка, ха-ха :-|" },
        { id: 4, message: "Хе-хе!" },
        { id: 5, message: "Хи-хи!" }
      ],
      newMessage: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilesPage = profilesReducer(this._state.profilesPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};


export default store;

window.store = store;