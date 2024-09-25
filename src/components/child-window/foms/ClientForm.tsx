import React, {useContext} from 'react';
import {useQuery, useMutation, useQueryClient} from 'react-query';
import {
    addClient,
    deleteClientById,
    getClientById,
    updateClient
} from "../../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../../api/parser";
import FormField from "../form-entries/FormField";
import DeleteBlock from "../form-entries/DeleteBlock";
import {ChildWindowContext} from "../../context-providers/ChildWindowProvider";
import useModal from "../../modal-window/useModal";
import {TypesContext} from "../../context-providers/TypesProvider";
import FormSelectField from "../form-entries/FormSelectField";
import SubmitBlock from "../form-entries/SubmitBlock";
import Loader from "../../Loader";

type ClientFormEntrailsProps = {
    id: number;
}

const ClientForm: React.FC<ClientFormEntrailsProps> = ({id}) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [name, setName] = React.useState('');
    const [typeId, setTypeId] = React.useState<number | null>(null);
    const [messangerId, setMessangerId] = React.useState<number | null>(null);
    const [checkInDate, setCheckInDate] = React.useState<string>('');
    const [checkOutDate, setCheckOutDate] = React.useState<string>('');
    const [chatId, setChatId] = React.useState<number | null>(null);

    const {handleOpenModal, ModalComponent} = useModal();
    const childWindow = useContext(ChildWindowContext);
    const closeAllWindows = () => childWindow?.closeChildWindow();
    const types = useContext(TypesContext);
    const queryClient = useQueryClient();

    const { isLoading: isClientLoading} = useQuery(
        ['client', id],
        () => getClientById(id),
        {
            enabled: id > 0,
            onSuccess: data => {
                setPhoneNumber(data.phone_number);
                setName(data.name);
                setTypeId(data.type_id);
                if (data.messanger_id) setMessangerId(data.messanger_id);
                setCheckInDate(timestampToDate(data.check_in_date));
                setCheckOutDate(timestampToDate(data.check_out_date));
                if (data.chat_id) setChatId(data.chat_id);
            },
            onError: (error: Error) => handleOpenModal('Получение клиента не удалось: ' + error.message, undefined, closeAllWindows)
        }
    );

    const createClientMutation = (mutationFn: (data: any) => Promise<any>, onSuccessMessage: string, getBack?: (data: any) => void) => {
        return useMutation(mutationFn, {
            onSuccess: (data) => {
                handleOpenModal(onSuccessMessage, getBack ? () => getBack(data) : undefined, closeAllWindows);
                queryClient.invalidateQueries('clients');
                resetForm();
            },
            onError: (error: Error) => handleOpenModal(`Ошибка: ${error.message}`, closeAllWindows),
        });
    };

    const useAddClientMutation = createClientMutation(
        async (clientData) => await addClient(clientData),
        'Клиент добавлен успешно',
        (data: any) => deleteClientById(data)
            .then(_ => handleOpenModal('Клиент не был добавлен'))
            .catch(error => handleOpenModal('Ошибка удаления: ' + error, undefined, closeAllWindows))
    )

    const useUpdateClientMutation = createClientMutation(
        async (clientData) => await updateClient(id,clientData),
        'Клиент обновлен успешно',
        (data: any) => updateClient(id,data)
            .then(_ => handleOpenModal('Клиент не был обновлен'))
            .catch(error => handleOpenModal('Ошибка обновления: ' + error, undefined, closeAllWindows))
    )

    const useDeleteClientMutation = createClientMutation(
        async (id: number) =>await deleteClientById(id),
        'Клиент удален успешно',
        (data: any) => addClient(data)
            .then(_ => handleOpenModal('Клиент не был удален'))
            .catch(error => handleOpenModal('Ошибка удаления: ' + error, undefined, closeAllWindows))
    );

    const resetForm = () => {
        setPhoneNumber('');
        setName('');
        setTypeId(null);
        setMessangerId(null);
        setCheckInDate('');
        setCheckOutDate('');
        setChatId(null);
    };

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
            useAddClientMutation.mutate(clientData);
        } else {
            useUpdateClientMutation.mutate(clientData);
        }
    };


    const isLoading = isClientLoading || useAddClientMutation.isLoading || useUpdateClientMutation.isLoading || useDeleteClientMutation.isLoading;
    return (
        <>
            <form onSubmit={handleSubmit} className="relative p-6 bg-white border border-cyan-800/20 rounded-lg">
                <FormField id="phone_number" label="Номер телефона" type="text" value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)} required/>
                <FormField id="name" label="Имя" type="text" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                <FormSelectField id="type_id" label="Тип" value={typeId || ''}
                                 onChange={(e) => setTypeId(parseInt(e.target.value, 10) || null)}
                                 options={types.clientTypes.map(type => ({value: type.id, label: type.type_name}))}/>
                <FormSelectField id="messanger_id" label="Мессенджер" value={messangerId || ''}
                                 onChange={(e) => setMessangerId(parseInt(e.target.value, 10) || null)}
                                 options={types.messengerTypes.map(messanger => ({
                                     value: messanger.id,
                                     label: messanger.messanger_name
                                 }))}/>
                <FormField id="check_in_date" label="Дата заезда" type="datetime-local" value={checkInDate}
                           onChange={(e) => setCheckInDate(e.target.value)}/>
                <FormField id="check_out_date" label="Дата выезда" type="datetime-local" value={checkOutDate}
                           onChange={(e) => setCheckOutDate(e.target.value)}/>
                <SubmitBlock id={id} stringEnd={'клиента'}/>
                {id > 0 && <DeleteBlock onDelete={()=> useDeleteClientMutation.mutate(id)}/>}
                {isLoading && <Loader withBackground={true}/>}
            </form>
            {ModalComponent}
        </>
    );
};

export default ClientForm;
