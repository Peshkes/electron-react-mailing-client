import React, {useState, useEffect} from 'react';
import {addClient, deleteClientById, getClientById, updateClient} from "../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../api/parser";
import FormField from "./FormField";
import DeleteBlock from "./DeleteBlock";

interface ClientFormEntrailsProps {
    id: number;
}

const ClientForm: React.FC<ClientFormEntrailsProps> = ({id}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [typeId, setTypeId] = useState<number | null>(null);
    const [messangerId, setMessangerId] = useState<number | null>(null);
    const [checkInDate, setCheckInDate] = useState<string>('');
    const [checkOutDate, setCheckOutDate] = useState<string>('');
    const [chatId, setChatId] = useState<number | null>(null);

    const isItUpdate = id > 0;

    useEffect(() => {
        if (isItUpdate) {
            getClientById(id)
                .then(data => {
                    setPhoneNumber(data.phone_number);
                    setName(data.name);
                    setTypeId(data.type_id);
                    if (data.messanger_id)
                        setMessangerId(data.messanger_id);
                    setCheckInDate(timestampToDate(data.check_in_date));
                    setCheckOutDate(timestampToDate(data.check_out_date));
                    if (data.chat_id)
                        setChatId(data.chat_id);
                })
                .catch(
                    //TODO Обработка ошибки
                );
        }
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const clientData = {
            phone_number: phoneNumber,
            name: name,
            type_id: typeId,
            messanger_id: messangerId,
            check_in_date: dateToTimestamp(checkInDate),
            check_out_date: dateToTimestamp(checkOutDate),
            chat_id: chatId,
        };

        if (isItUpdate) {
            updateClient(id, clientData)
                .then(client => {
                    //TODO Обработка успешного обновления
                });
        } else {
            addClient(clientData).then(id => {
                //TODO Обработка успешного добавления
            });
        }
    };

    const handleDelete = () => {
        deleteClientById(id).then(client => {
            //TODO Обработка успешного удаления
        })
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white border border-cyan-800/20 rounded-lg">
            <FormField id="phone_number" label="Номер телефона" type="text" value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)} required/>
            <FormField id="name" label="Имя" type="text" value={name}
                       onChange={(e) => setName(e.target.value)} required/>
            <FormField id="type_id" label="Тип" type="number" value={typeId || ''}
                       onChange={(e) => setTypeId(parseInt(e.target.value, 10) || null)}/>
            <FormField id="messanger_id" label="Мессенджер" type="number" value={messangerId || ''}
                       onChange={(e) => setMessangerId(parseInt(e.target.value, 10) || null)}/>
            <FormField id="check_in_date" label="Дата заезда" type="datetime-local" value={checkInDate}
                       onChange={(e) => setCheckInDate(e.target.value)}/>
            <FormField id="check_out_date" label="Дата выезда" type="datetime-local" value={checkOutDate}
                       onChange={(e) => setCheckOutDate(e.target.value)}/>
            <FormField id="chat_id" label="Chat ID" type="number" value={chatId || ''}
                       onChange={(e) => setChatId(parseInt(e.target.value, 10) || null)} disabled/>
            <div className="flex justify-center mt-6">
                <button type="submit"
                        className="bg-cyan-600 text-white w-full max-w-xs py-3 rounded-md border
                    border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    {id > 0 ? 'Обновить клиента' : 'Добавить клиента'}</button>
            </div>

            {isItUpdate && <DeleteBlock onDelete={handleDelete}/>}
        </form>
    );
};

export default ClientForm;