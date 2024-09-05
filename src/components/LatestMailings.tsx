import React, {useContext, useEffect, useState} from 'react';
import Plus from "../icons/Plus";
import {getNearestMessages, getRecipientTypes} from "../api/fake";
import {ApiResponse, ClientType, Message} from "../api/types";
import MailingMessage from "./MailingMessage";
import {ChildWindowContext} from "./child-window/ChildWindowProvider";

const numberOfMessagesShown:number = 10;
const initialState: Message[] = [
    {
        "id": 1,
        "theme": "Free massage at the pool ",
        "message_text": "string",
        "recipient_type_id": 1,
        "media_path": "string",
        "sending_date": 1622518799,
    }
];
const LatestMailings = () => {

    const [nearestMessages, setNearestMessages] = useState(initialState);


    useEffect(() => {
        getNearestMessages(numberOfMessagesShown)
            .then((response: ApiResponse<Message[]>) => {
                if (Array.isArray(response)) {
                    setNearestMessages(response);
                } else if ('status' in response) {
                    console.error('Error Status:', response.status);
                } else {
                    console.error('Unexpected response format');
                }
            })
            .catch((error) => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);

    const childWindow = useContext(ChildWindowContext);
    const handleOpenChildWindow = () => {
        if (childWindow) {
            childWindow.openChildWindow({ type: 'message', id: 0 });
        } else
            console.log('childWindow is null');
    };
    return (
        <div className="w-[23%] h-full bg-cyan-800 flex flex-col justify-start px-4 py-3">
            <div className="w-full flex justify-between">
                <h2 className="text-center text-white mb-2 text-2xl">Ближайшие рассылки</h2>
                <div className="flex items-center"><Plus color="white" onClickFunction={handleOpenChildWindow}/></div>
            </div>
            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-none">
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div
                    className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                    <div className="flex justify-between text-white"><p>Тема: </p><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="pt-1 flex justify-between text-white"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
            </div>
        </div>
    );
};

export default LatestMailings;