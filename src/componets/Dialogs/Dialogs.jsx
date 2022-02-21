import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';
import MessageArea from './MessageArea';

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.path} className={style.dialog}>{props.dialogs}</NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={style.message} id={props.id}>{props.message}</div>
    )
}






const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map((dialog) => <DialogItem dialogs={dialog.name} path={dialog.path} key={dialog.path}/>);


    let messagesElements = props.messages
        .map((message) => <Message id={message.id} message={message.text} key={message.id}/>)


    return (
        <div>


            <div className={style.dialogs}>
                <ul className={style.dialogsItems}>

                    {
                        dialogsElements
                    }

                </ul>
                <div className={style.messages}>
                    {
                        messagesElements
                    }
                </div>
            </div>
            <MessageArea />
        </div>

    );
};

export default Dialogs;