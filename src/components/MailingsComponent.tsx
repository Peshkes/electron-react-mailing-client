import React, {useEffect, useState} from 'react';
import {getAllMessages} from "../api/fake";
import {Message} from "../api/types";
import Cross from "../icons/Cross";
import Pagination from "./Pagination";

const initialState: Message[] = [
    {
        id: 1,
        theme: 'Hello',
        message_text: 'Hello World!',
        recipient_type_id: 1,
        sending_date: Date.now()
    }
]

const MailingsComponent = () => {
    const [mailings, setMailings] = useState(initialState);

    useEffect(() => {
        getAllMessages()
            .then((response: Message[]) => {
                //console.log("function called")
                // if(JSON.stringify(response) != JSON.stringify(mailings))
                setMailings(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);

    return (
        <div className="w-[77%] h-full mx-auto flex flex-col justify-start text-cyan-800">
            <h2 className="w-full text-3xl py-6 pl-4 pr-4">Рассылки</h2>
            <div className="w-full h-[70%] flex flex-col justify-start mx-auto pb-4 px-4">
                <div className="w-full px-7 py-4 mb-4 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <input type="text" placeholder="Поиск" className="w-full"/>
                </div>
                <div className="w-full h-full flex flex-col justify-between py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <div className="">
                        <div className="w-full py-5 px-7 grid grid-cols-4 font-bold sticky top-0 bg-white">
                            <div>Тема</div>
                            <div>Тип</div>
                            <div>Дата</div>
                            <div></div>
                        </div>
                        {mailings.map((item, index) => (
                            <div
                                className="px-7 grid grid-cols-4 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                                <div>{item.theme}</div>
                                <div>{item.recipient_type_id}</div>
                                <div>{item.sending_date}</div>
                                <Cross color="#155e75"/>
                            </div>
                        ))}
                    </div>
                    <div className="text-center"><Pagination/></div>
                </div>
            </div>
            <div className="w-full h-[25%] mx-auto pb-8 px-4 flex justify-between ">
                <div className="w-[25%] px-7 pt-1 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Типы</h3>
                    <div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="1" />
                            <label className="px-7" htmlFor="adult">Взрослые</label>
                        </div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="2" />
                            <label className="px-7" htmlFor="child">С детьми</label>
                        </div>
                    </div>
                </div>
                <div className="w-[73%] px-7 pt-1 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">

                </div>
            </div>
        </div>
    );
};

export default MailingsComponent;