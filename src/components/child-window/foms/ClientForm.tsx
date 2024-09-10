import React, { useState, useEffect, useContext } from 'react';
import { addClient, deleteClientById, getClientById, updateClient } from "../../../api/fake";
import { dateToTimestamp, timestampToDate } from "../../../api/parser";
import FormField from "../form-entries/FormField";
import DeleteBlock from "../form-entries/DeleteBlock";
import { ClientData } from "../../../api/types";
import { ChildWindowContext } from "../../context-providers/ChildWindowProvider";
import useModal from "../../modal-window/useModal";
import { TypesContext } from "../../context-providers/TypesProvider";
import FormSelectField from "../form-entries/FormSelectField";
import SubmitBlock from "../form-entries/SubmitBlock";

type ClientFormEntrailsProps = {
    id: number;
}

const ClientForm: React.FC<ClientFormEntrailsProps> = ({ id }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [typeId, setTypeId] = useState<number | null>(null);
    const [messangerId, setMessangerId] = useState<number | null>(null);
    const [checkInDate, setCheckInDate] = useState<string>('');
    const [checkOutDate, setCheckOutDate] = useState<string>('');
    const [chatId, setChatId] = useState<number | null>(null);

    const { handleOpenModal, ModalComponent } = useModal();

    const childWindow = useContext(ChildWindowContext);
    const closeAllWindows = () => childWindow?.closeChildWindow();

    const types = useContext(TypesContext);

    const resetForm = () => {
        setPhoneNumber('');
        setName('');
        setTypeId(null);
        setMessangerId(null);
        setCheckInDate('');
        setCheckOutDate('');
        setChatId(null);
    };

    const isItUpdate = id > 0;

    useEffect(() => {
        if (isItUpdate) {
            getClientById(id)
                .then(data => {
                    setPhoneNumber(data.phone_number);
                    setName(data.name);
                    setTypeId(data.type_id);
                    if (data.messanger_id) setMessangerId(data.messanger_id);
                    setCheckInDate(timestampToDate(data.check_in_date));
                    setCheckOutDate(timestampToDate(data.check_out_date));
                    if (data.chat_id) setChatId(data.chat_id);
                })
                .catch(error => handleOpenModal('Получение клиента не удалось: ' + error, undefined, closeAllWindows));
        }
    }, [id]);


   const handleUpdateClient = (id:number, clientData:ClientData) => {
       updateClient(id, clientData)
           .then(client => {
               handleOpenModal('Клиент ' + client.name + ' был обновлен успешно',
                   () => updateClient(id, client as ClientData)
                       .then(_ => handleOpenModal('Обновление клиента отменено'))
                       .catch(error => handleOpenModal('Отмена обновления клиента не удалась: ' + error, undefined, closeAllWindows))
               );
           })
           .catch(error => handleOpenModal('Обновление клиента не удалось: ' + error, undefined, closeAllWindows));
   }

    const handleAddClient = (clientData:ClientData) => {
        addClient(clientData as ClientData)
            .then(id => handleOpenModal('Клиент ' + clientData.name + ' был добавлен успешно',
                () => deleteClientById(id)
                    .then(_ => handleOpenModal('Добавление клиента отменено'))
                    .catch(error => handleOpenModal('Отмена добавления клиента не удалась: ' + error, undefined, closeAllWindows)))
            )
            .then(_ => resetForm())
            .catch(error => handleOpenModal('Добавление клиента не удалось: ' + error, undefined, closeAllWindows));
    }


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
            handleUpdateClient(id as number, clientData as ClientData);
        } else {
            handleAddClient(clientData as ClientData);
        }
    };

    const handleDelete = () => {
        deleteClientById(id)
            .then(client => handleOpenModal('Клиент ' + client.name + ' был удален успешно',
                () => addClient(client as ClientData)
                    .then(_ => handleOpenModal('Клиент добавлен вновь'))
                    .catch(error => handleOpenModal('Клиент не добавлен: ' + error, undefined, closeAllWindows))))
            .catch(error => handleOpenModal('Клиента не удалось удалить: ' + error, undefined, closeAllWindows));
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="p-6 bg-white border border-cyan-800/20 rounded-lg">
                <FormField id="phone_number" label="Номер телефона" type="text" value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)} required />
                <FormField id="name" label="Имя" type="text" value={name}
                           onChange={(e) => setName(e.target.value)} required />
                <FormSelectField id="type_id" label="Тип" value={typeId || ''}
                                 onChange={(e) => setTypeId(parseInt(e.target.value, 10) || null)}
                                 options={types.clientTypes.map(type => ({ value: type.id, label: type.type_name }))}/>
                <FormSelectField id="messanger_id" label="Мессенджер" value={messangerId || ''}
                                 onChange={(e) => setMessangerId(parseInt(e.target.value, 10) || null)}
                                 options={types.messengerTypes.map(messanger => ({ value: messanger.id, label: messanger.messanger_name }))}/>
                <FormField id="check_in_date" label="Дата заезда" type="datetime-local" value={checkInDate}
                           onChange={(e) => setCheckInDate(e.target.value)} />
                <FormField id="check_out_date" label="Дата выезда" type="datetime-local" value={checkOutDate}
                           onChange={(e) => setCheckOutDate(e.target.value)} />
                <FormField id="chat_id" label="Chat ID" type="number" value={chatId || ''}
                           onChange={(e) => setChatId(parseInt(e.target.value, 10) || null)} disabled />
                <SubmitBlock id={id} stringEnd={'клиента'}/>
                {isItUpdate && <DeleteBlock onDelete={handleDelete} />}
            </form>
            {ModalComponent}
        </>
    );
};

export default ClientForm;