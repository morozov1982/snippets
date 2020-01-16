const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessage
      };

      state.messages.push(newMessage);
      state.newMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessage = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (body) =>
                ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
