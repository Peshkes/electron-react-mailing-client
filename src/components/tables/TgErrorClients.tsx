import React, {useEffect, useState} from 'react';
import {getClientsWithTelegramError} from "../../api/fake";
import {Client} from "../../api/types";

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
const TgErrorClients = () => {

    const [tgErrorClients, setTgErrorClients] = useState(initialState);

    useEffect(() => {
        getClientsWithTelegramError()
            .then((response: Client[]) => {
                setTgErrorClients(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);

    return (
        tgErrorClients.map((item, index) => (
            <div key={index}
                 className="px-7 grid grid-cols-2 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                <div>{item.name}</div>
                <div>{item.phone_number}</div>
            </div>)
        ));
};

export default TgErrorClients;