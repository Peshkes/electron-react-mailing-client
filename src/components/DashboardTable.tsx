import React, {useEffect, useState} from 'react';
import Plus from "../icons/Plus";

import {
    getAllSampleMessages,
    getClientsWithTelegramError,
    getClientsWithUnselectedType,
    getLastClients,
} from "../api/fake";
import {ApiResponse, Client, Message, SampleMessage} from "../api/types";


type Props = {
    title: string
    plus: boolean
    plusFunction?: () => void | undefined
}

const initialState: Client[] = [
    {
        "id": 1,
        "phone_number": "+123456789",
        "name": "Type Unassignedovich",
        "type_id": null,
        "check_in_date": 1622518799,
        "check_out_date": 1622605199,
        "chat_id": 123456789,
        "messanger_id": 1
    }
];

const initialMessagesState: SampleMessage[] = [
    {
        id: 1,
        sample_name: 'Greeting',
        theme: 'Welcome',
        message_text: 'Welcome to our service!',
        recipient_type_id: 1,
        media_path: '',
        sending_date: Date.now()
    },
];

const DashboardTable = (props: Props) => {

    const [noTypeClients, setNoTypeClients] = useState(initialState);
    const [tgErrorClients, setTgErrorClients] = useState(initialState);
    const [latestAddedClients, setLatestAddedClients] = useState(initialState);
    const [templateMessages, setTemplateMessages] = useState(initialMessagesState);
    const numberOfShownClients: number = 10;

    useEffect(() => {

        getClientsWithUnselectedType()
            .then((response: Client[]) => {
                setNoTypeClients(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });


        getClientsWithTelegramError()
            .then((response: Client[]) => {
                setTgErrorClients(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });

        getLastClients(numberOfShownClients)
            .then((response: Client[]) => {
                setLatestAddedClients(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });

        getAllSampleMessages()
            .then((response: SampleMessage[]) => {
                setTemplateMessages(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });

    }, []);

    const checkTable = (table: string) => {
        switch (table) {
            case "Клиенты без типа":
                return (
                    tgErrorClients.map((item, index) => (
                        <div key={index}
                             className="px-7 grid grid-cols-2 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                            <div>{item.name}</div>
                            <div>{item.phone_number}</div>
                        </div>)
                    ));
            case "Ошибки в телеграме":
                return (
                    noTypeClients.map((item, index) => (
                        <div key={index}
                             className="px-7 grid grid-cols-2 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                            <div>{item.name}</div>
                            <div>{item.phone_number}</div>
                        </div>)
                    ));
            case "Последние клиенты":
                return (
                    latestAddedClients.map((item, index) => (
                        <div key={index}
                             className="px-7 grid grid-cols-2 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                            <div>{item.name}</div>
                            <div>{item.phone_number}</div>
                        </div>)
                    ));
            case "Шаблоны":
                return (
                    templateMessages.map((item, index) => (
                        <div key={index}
                             className="px-7 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                            <div>{item.theme}</div>
                        </div>)
                    ));
            default:
        }
    }

    return (
        <div
            className="w-full h-full flex flex-col justify-start bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
            <div className="w-full py-5  flex justify-between border-b-4 border-solid border-cyan-800/20">
                <p className="pl-7 text-2xl text-cyan-800">{props.title}</p>
                {
                    props.plusFunction &&
                    <div className="flex items-center pr-7 cursor-pointer">
                        <Plus color="black" onClickFunction={props.plusFunction}/>
                    </div>}
            </div>
            <div className="w-full pb-5 overflow-auto scroll-smooth scrollbar-none text-cyan-800">
                {props.title == "Шаблоны" ?
                    <div className="w-full py-5 px-7 sticky top-0 bg-white">

                    </div> :
                    <div className="w-full py-5 px-7 grid grid-cols-2 font-bold sticky top-0 bg-white">
                        <div>Имя</div>
                        <div>Телефон</div>
                    </div>
                }
                <div className="w-full"> {checkTable(props.title)}

                </div>
            </div>
        </div>
    );
};

export default DashboardTable;