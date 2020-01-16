import React from "react";
import stl from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

  let messages = props.dialogsPage.messages;
  let dialogs = props.dialogsPage.dialogs;

  let dialogsElements = dialogs.map (
    d => <DialogsItem name={d.name} id={d.id} key={d.id} />
  );

  let messagesElements = messages.map (
    m => <Message message={m.message} key={m.id} />
  );

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogs__items}>
        { dialogsElements }
      </div>
      <div className={stl.messages}>
        { messagesElements }
      
        <div>
          <textarea onChange={ onMessageChange } ref={ newMessageElement } value={ props.dialogsPage.newMessage } />
        </div>
        <div>
          <button onClick={ addMessage }>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

//**************************************************//
// =======   К О Н С П Е К Т   =====================//
//**************************************************//

// {`${stl.item} ${stl.active}`}  -  если нужно присвоить несколько классов
