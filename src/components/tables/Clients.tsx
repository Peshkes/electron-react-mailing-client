import React, {useEffect, useState} from 'react';
import {Client} from "../../api/types";

type Props = {
    functionToCall: (numberOfShownClients?:number) => Promise<Client[]>
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
const openClient = () => {
    return undefined;
}

const Clients = (props: Props) => {
    const [clients, setClients] = useState(initialState);



    useEffect(() => {
        props.functionToCall()
            .then((response: Client[]) => {
                setClients(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);
    console.log(clients)


    return (
        clients.map((item, index) => (
            <div key={index} onClick={openClient()}
                 className="px-7 grid grid-cols-2 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                <div>{item.name}</div>
                <div>{item.phone_number}</div>
            </div>)
        ));
};

export default Clients;