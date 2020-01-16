const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {...state,
        newMessage: action.body
      };
    }
    case SEND_MESSAGE: {
      let body = state.newMessage;
      return { ...state,
        newMessage: '',
        messages: [...state.messages, {id: 6, message: body}]
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (body) =>
                ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
