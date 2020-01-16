import React from "react";
import stl from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map (
    d => <DialogsItem name={d.name} id={d.id} key={d.id} />
  );

  let messagesElements = state.messages.map (
    m => <Message message={m.message} key={m.id} />
  );

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageBody(text);
  };

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogs__items}>
        { dialogsElements }
      </div>
      <div className={stl.messages}>
        { messagesElements }
      
        <div>
          <textarea onChange={ onMessageChange } ref={ newMessageElement } value={ state.newMessage } />
        </div>
        <div>
          <button onClick={ onSendMessageClick }>Add Message</button>
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
