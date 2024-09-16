import React, {useContext, useEffect, useState} from 'react';
import {plannedMailings} from "../constants/constants";
import {getRecipientTypes} from "../api/fake";
import {ApiResponse, ClientType, Message} from "../api/types";
import {ChildWindowContext} from "./context-providers/ChildWindowProvider";

type Props = {
    item: Message
}

const initialState: ClientType[] = [
    {id: 1, type_name: 'Взрослые'},
    {id: 2, type_name: 'Семья с детьми'}
];


const MailingMessage = (props: Props) => {
    const [recipientTypes, setRecipientTypes] = useState(initialState);
    let type_id = props.item.recipient_type_id;
    const childWindow = useContext(ChildWindowContext);
    const handleOpenMessage = (id:number) => childWindow?.openChildWindow({type: 'message', id: id});
    useEffect(() => {
        getRecipientTypes()
            .then((response: ClientType[]) => {
                setRecipientTypes(response);
            })
            .catch((error) => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);


    return (
        <div tabIndex={props.item.id} onClick={(e) => handleOpenMessage(e.currentTarget.tabIndex)}
            className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
            <div className="flex justify-between text-white"><p>Тема: </p><p>{props.item.theme}</p>
            </div>
            <div className="pt-1 flex justify-between text-white"><p>Тип: </p>{recipientTypes.map((item, index) => (
                item.id == type_id ? <p key={index}>{item.type_name}</p> : <></>
            ))}</div>
            <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>{props.item.media_path}</p></div>
            <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>{props.item.sending_date}</p></div>
        </div>
    );
};

export default MailingMessage;