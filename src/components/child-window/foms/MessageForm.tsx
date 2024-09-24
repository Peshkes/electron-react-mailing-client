import React, {useState, useContext} from 'react';
import FormField from '../form-entries/FormField';
import DeleteBlock from '../form-entries/DeleteBlock';
import {
    addMessage,
    addSampleMessage,
    deleteMessageById,
    deleteSampleMessageById,
    getMessageById,
    getSampleMessageById, sendMessageNow,
    updateMessage,
    updateSampleMessage
} from "../../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../../api/parser";
import {MessageData, SampleMessageData} from "../../../api/types";
import useModal from "../../modal-window/useModal";
import {ChildWindowContext} from "../../context-providers/ChildWindowProvider";
import {useMutation, useQuery, useQueryClient} from "react-query";
import FormSelectField, {Option} from "../form-entries/FormSelectField";
import {TypesContext} from "../../context-providers/TypesProvider";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


type  MessageFormEntrailsProps = {
    id: number;
    type: 'message' | 'sample';
};

const MessageForm: React.FC<MessageFormEntrailsProps> = ({id, type}) => {
    const {clientTypes} = useContext(TypesContext);
    const [theme, setTheme] = useState('');
    const [messageText, setMessageText] = useState('');
    const [mediaPath, setMediaPath] = useState('');
    const [sendingDate, setSendingDate] = useState('');
    const [sampleName, setSampleName] = useState('');
    const [recipientTypeId, setRecipientTypeId] = useState<number | ''>('');
    const [isImmediateSend, setIsImmediateSend] = useState(false);

    const {handleOpenModal, ModalComponent} = useModal();
    const childWindow = useContext(ChildWindowContext);
    const closeAllWindows = () => childWindow?.closeChildWindow();
    const queryClient = useQueryClient();
    const isItUpdate = id > 0;

    const {data: messageData, isLoading: isMessageLoading} = useQuery(
        ['message', 'sample', id],
        type === 'message' ? () => getMessageById(id) : () => getSampleMessageById(id),
        {
            enabled: id > 0,
            onSuccess:
                type === 'message' ?
                    (data: MessageData) => {
                        setTheme(data.theme);
                        setMessageText(data.message_text);
                        if (data.recipient_type_id) setRecipientTypeId(data.recipient_type_id);
                        if (data.media_path) setMediaPath(data.media_path);
                        if (data.sending_date) setSendingDate(timestampToDate(data.sending_date));
                        if (data.media_path) setMediaPath(data.media_path);
                    } :
                    (data: SampleMessageData) => {
                        setTheme(data.theme);
                        setMessageText(data.message_text);
                        if (data.recipient_type_id) setRecipientTypeId(data.recipient_type_id);
                        if (data.media_path) setMediaPath(data.media_path);
                        if (data.sending_date) setSendingDate(timestampToDate(data.sending_date));
                        setSampleName(data.sample_name);
                    },
            onError: (error: Error) => handleOpenModal('Получение клиента не удалось: ' + error.message, undefined, closeAllWindows)
        }
    );

    const useAddMessageMutation = () => {
        if (type === 'message') {
            return useMutation(
                async (messageData: MessageData | SampleMessageData) => {
                    const id = await addMessage(messageData);
                    // Опционально: получить полный объект клиента после добавления
                    return await getMessageById(id);
                },
                {
                    onSuccess: () => {
                        handleOpenModal('Рассылка добавлена успешно', closeAllWindows);
                        queryClient.invalidateQueries('messages');
                        resetForm(type);
                    },
                    onError: (error: Error) => handleOpenModal('Ошибка: ' + error.message, closeAllWindows),
                }
            );
        } else {
            return useMutation(
                async (messageData: MessageData | SampleMessageData) => {
                    const id = await addSampleMessage(messageData as SampleMessageData);
                    // Опционально: получить полный объект клиента после добавления
                    return await getSampleMessageById(id);
                },
                {
                    onSuccess: () => {
                        handleOpenModal('Шаблон рассылки добавлен успешно', closeAllWindows);
                        queryClient.invalidateQueries('samples');
                        resetForm(type);
                    },
                    onError: (error: Error) => handleOpenModal('Ошибка: ' + error.message, closeAllWindows),
                }
            );
        }

    };

    const useUpdateMessageMutation = (id: number) => {
        if (type === 'message') {
            return useMutation(
                async (messageData: MessageData | SampleMessageData) => {
                    return await updateMessage(id, messageData);
                },
                {
                    onSuccess: () => {
                        handleOpenModal('Рассылка обновлена успешно', closeAllWindows);
                        queryClient.invalidateQueries('messages');
                        resetForm(type);
                    },
                    onError: (error: Error) => handleOpenModal('Ошибка: ' + error.message, closeAllWindows),
                }
            );
        } else {
            return useMutation(
                async (messageData: MessageData | SampleMessageData) => {
                    return await updateSampleMessage(id, messageData as SampleMessageData);
                },
                {
                    onSuccess: () => {
                        handleOpenModal('Шаблон рассылки обновлен успешно', closeAllWindows);
                        queryClient.invalidateQueries('samples');
                        resetForm(type);
                    },
                    onError: (error: Error) => handleOpenModal('Ошибка: ' + error.message, closeAllWindows),
                }
            );
        }

    };


    const addMessageMutation = useAddMessageMutation();
    const updateMessageMutation = useUpdateMessageMutation(id);


    const handleDeleteSampleMessageById = (id: number) => {
        deleteSampleMessageById(id)
            .then(data => {
                handleOpenModal('Шаблон' + data.theme + ' ,было удален успешно',
                    () => addSampleMessage(data as SampleMessageData)
                        .then(_ => handleOpenModal('Шаблон не был удален'))
                        .catch(error => handleOpenModal('Шаблон не добавлен: ' + error, undefined, closeAllWindows)), closeAllWindows);
            })
            .catch(error => handleOpenModal('Шаблон не удалось удалить: ' + error, undefined, closeAllWindows)
            )
    }

    const handleDeleteMessageById = (id: number) => {
        deleteMessageById(id).then(data => {
            handleOpenModal('Сообщение' + data.theme + ' ,было удален успешно',
                () => addMessage(data as MessageData)
                    .then(_ => handleOpenModal('Сообщение не было удалено'))
                    .catch(error => handleOpenModal('Сообщение не добавлено: ' + error, undefined, closeAllWindows)), closeAllWindows);
        })
            .catch(error => handleOpenModal('Сообщение не удалось удалить: ' + error, undefined, closeAllWindows)
            );
    }

    const handleSetNow = () => {
        setIsImmediateSend(!isImmediateSend);
        const now = new Date();
        const localNow = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        setSendingDate(localNow);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let data: MessageData | SampleMessageData;

        if (type === 'message' && isImmediateSend) {
            data = {
                theme: theme,
                message_text: messageText,
                recipient_type_id: recipientTypeId ? recipientTypeId : null,
                media_path: mediaPath ? mediaPath : null,
            } as MessageData;
            sendMessageNow(data)
                .then(() => handleOpenModal('Сообщение отправлено', undefined, closeAllWindows))
                .catch(error => handleOpenModal('Сообщение не отправлено: ' + error, undefined, closeAllWindows));
            return;
        }

        if (type === 'message') {
            data = {
                theme: theme,
                message_text: messageText,
                recipient_type_id: recipientTypeId ? recipientTypeId : null,
                media_path: mediaPath ? mediaPath : null,
                sending_date: dateToTimestamp(sendingDate)
            } as MessageData;
        } else {
            data = {
                theme: theme,
                message_text: messageText,
                recipient_type_id: recipientTypeId ? recipientTypeId : null,
                media_path: mediaPath ? mediaPath : null,
                sending_date: dateToTimestamp(sendingDate),
                sample_name: sampleName,
            } as SampleMessageData;
        }

        if (id > 0) {
            updateMessageMutation.mutate(data);
        } else {
            addMessageMutation.mutate(data);
        }

    }

    const handleFileSelect = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await window.electron.openFile();
        if (result.length > 0) {
            setMediaPath(result[0]);
        }
    };


    const handleDelete = () => {
        type === 'sample' ?
            handleDeleteSampleMessageById(id as number) :
            handleDeleteMessageById(id as number);
    };
    const resetForm = (type: string) => {
        setTheme('');
        setMessageText('');
        if (type === 'sample') setSampleName('');
        setMediaPath('');
        setSendingDate('');
        setRecipientTypeId('');
    };

    if (isMessageLoading) return <div>Загрузка...</div>;

    return (
        <>
            <form onSubmit={handleSubmit} className={`p-6 bg-white border border-cyan-800/20 rounded-lg`}>
                {type === 'sample' && (
                    <FormField
                        id="sample_name"
                        label="Название образца"
                        type="text"
                        value={sampleName}
                        onChange={(e) => setSampleName(e.target.value)}
                        required
                    />
                )}
                <FormField
                    id="theme"
                    label="Тема"
                    type="text"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    required
                />
                <div className="flex items-center mb-4">
                    <label htmlFor="message_text" className="text-cyan-800 font-semibold mr-10">Текст сообщения</label>
                    <textarea
                        id="message_text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="flex-grow border border-cyan-800/40 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                        rows={4}
                        required
                    />
                </div>
                <FormField
                    id="media_path"
                    label="Путь к медиа"
                    type="text"
                    value={mediaPath}
                    onChange={(e) => setMediaPath(e.target.value)}
                >
                    <button
                        className="bg-cyan-600 text-white w-full px-2 rounded-md border border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        onClick={handleFileSelect}
                    >Файл
                    </button>
                </FormField>
                <FormField
                    id="sending_date"
                    label="Дата отправки"
                    type="datetime-local"
                    disabled={isImmediateSend}
                    value={sendingDate}
                    onChange={(e) => setSendingDate(e.target.value)}
                >
                    <button
                        type="button" onClick={handleSetNow}
                        className="bg-cyan-600 text-white w-full px-2 rounded-md border border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        {isImmediateSend ? 'Потом' : 'Сразу'}
                    </button>
                </FormField>
                <FormSelectField id="recipient_type_id" label="Тип получателя" value={recipientTypeId || ''}
                                 onChange={(e) => setRecipientTypeId(+e.target.value || "")}
                                 options={clientTypes.map(item => ({value: item.id, label: item.type_name}))}
                                 startOption={{value: '', label: 'Все'}}/>
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-cyan-600 text-white w-full max-w-xs py-3 rounded-md border border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        {id > 0 ? 'Обновить' : 'Добавить'} {type === 'message' ? 'сообщение' : 'образец'}
                    </button>
                </div>

                {isItUpdate && <DeleteBlock onDelete={handleDelete}/>}
            </form>
            {ModalComponent}
        </>
    );
};

export default MessageForm;
