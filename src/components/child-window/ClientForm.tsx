import React, {useState, useEffect} from 'react';
import {addClient, getClientById, updateClient} from "../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../api/parser";

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

    useEffect(() => {
        if (id > 0) {
            try {
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
                    });
            } catch (e) {

            }

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

        if (id > 0) {
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

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white border border-cyan-800/20 rounded-lg">
            <div>
                <label htmlFor="phone_number" className="block text-gray-700">Phone Number</label>
                <input
                    id="phone_number"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    required
                />
            </div>
            <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    required
                />
            </div>
            <div>
                <label htmlFor="type_id" className="block text-gray-700">Type</label>
                <input
                    id="type_id"
                    type="number"
                    value={typeId || ''}
                    onChange={(e) => setTypeId(parseInt(e.target.value, 10) || null)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="messanger_id" className="block text-gray-700">Messenger</label>
                <input
                    id="messanger_id"
                    type="number"
                    value={messangerId || ''}
                    onChange={(e) => setMessangerId(parseInt(e.target.value, 10) || null)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="check_in_date" className="block text-gray-700">Check-In Date</label>
                <input
                    id="check_in_date"
                    type="datetime-local"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="check_out_date" className="block text-gray-700">Check-Out Date</label>
                <input
                    id="check_out_date"
                    type="datetime-local"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="chat_id" className="block text-gray-700">Chat ID</label>
                <input
                    disabled={true}
                    id="chat_id"
                    type="number"
                    value={chatId || ''}
                    onChange={(e) => setChatId(parseInt(e.target.value, 10) || null)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
            >
                {id ? 'Update Client' : 'Add Client'}
            </button>
        </form>
    );
};

export default ClientForm;