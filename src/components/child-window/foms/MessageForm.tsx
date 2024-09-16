import React, {useState, useEffect, useContext} from 'react';
import FormField from '../form-entries/FormField';
import DeleteBlock from '../form-entries/DeleteBlock';
import {
    addMessage,
    addSampleMessage,
    deleteMessageById,
    deleteSampleMessageById, getMessageById, getSampleMessageById,
    updateMessage,
    updateSampleMessage
} from "../../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../../api/parser";
import {MessageData, SampleMessageData} from "../../../api/types";
import useModal from "../../modal-window/useModal";
import {ChildWindowContext} from "../../context-providers/ChildWindowProvider";

type Props = {
    id: number;
    type: 'message' | 'sample';
};

const MessageForm = ({id, type}: Props) => {
    const [theme, setTheme] = useState('');
    const [messageText, setMessageText] = useState('');
    const [mediaPath, setMediaPath] = useState('');
    const [sendingDate, setSendingDate] = useState('');
    const [sampleName, setSampleName] = useState('');
    const [recipientTypeId, setRecipientTypeId] = useState<number | ''>('');

    const {handleOpenModal, ModalComponent} = useModal();
    const childWindow = useContext(ChildWindowContext);
    const closeAllWindows = () => childWindow?.closeChildWindow();

    const isItUpdate = id > 0;


    useEffect(() => {
        if (isItUpdate) {
            if (type === 'sample') {
                getSampleMessageById(id).then(data => {
                    setTheme(data.theme);
                    setMessageText(data.message_text);
                    setRecipientTypeId(data.recipient_type_id || '');
                    if (data.media_path) setMediaPath(data.media_path);
                    setSendingDate(timestampToDate(data.sending_date));
                    setSampleName(data.sample_name);
                })
            } else {
                getMessageById(id).then(data => {
                    setTheme(data.theme);
                    setMessageText(data.message_text);
                    setRecipientTypeId(data.recipient_type_id || '');
                    if (data.media_path) setMediaPath(data.media_path);
                    setSendingDate(timestampToDate(data.sending_date));
                })
            }
        }
    }, [id, type]);


    const handleUpdateSampleMessage = (id: number, data: SampleMessageData) => {
        updateSampleMessage(id, data).then(
            message => {
                handleOpenModal('Шаблон' + data.theme + ' ,было успешно обновлено',
                    () => updateSampleMessage(id, data as SampleMessageData)
                        .then(_ => handleOpenModal('Обновление шаблона отменено'))
                        .catch(error => handleOpenModal('Отмена обновления шаблона не удалась: ' + error, undefined, closeAllWindows)), closeAllWindows);
            })
            .catch(error => handleOpenModal('Обновление шаблона не удалась: ' + error, undefined, closeAllWindows))
    }

    const handleUpdateMessage = (id: number, data: MessageData) => {
        updateMessage(id, data).then(
            message => {
                handleOpenModal('Сообщение' + data.theme + ' ,было успешно обновлено',
                    () => updateMessage(id, data as MessageData)
                        .then(_ => handleOpenModal('Обновление сообщения отменено'))
                        .catch(error => handleOpenModal('Отмена обновления сообщения не удалась: ' + error, undefined, closeAllWindows)), closeAllWindows);
            })
            .catch(error => handleOpenModal('Обновление сообщения не удалась: ' + error, undefined, closeAllWindows))
    }
    const handleAddSampleMessage = (data: SampleMessageData) => {
        addSampleMessage(data)
            .then(id => {
                handleOpenModal('Шаблон сообщение' + data.theme + ' ,был обновлен успешно',
                    () => deleteSampleMessageById(id)
                        .then(_ => handleOpenModal('Добавление шаблона отменено'))
                        .catch(error => handleOpenModal('Отмена добавления шаблона не удалась: ' + error, undefined, closeAllWindows)), closeAllWindows);
            })
            .catch(error => handleOpenModal('Добавление шаблона не удалась: ' + error, undefined, closeAllWindows))
    }
    const handleAddMessage = (data: MessageData) => {
        addMessage(data)
            .then(id => {
                handleOpenModal('Сообщение' + data.theme + ' ,было обновлено успешно',
                    () => deleteMessageById(id)
                        .then(_ => handleOpenModal('Добавление сообщения отменено'))
                        .catch(error => handleOpenModal('Отмена добавления сообщения не удалась: ' + error, undefined, closeAllWindows)), closeAllWindows);
            })
            .catch(error => handleOpenModal('Добавление сообщения не удалась: ' + error, undefined, closeAllWindows))
    }

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


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            theme,
            message_text: messageText,
            media_path: mediaPath,
            sending_date: dateToTimestamp(sendingDate),
            recipient_type_id: recipientTypeId ? recipientTypeId : null,
            ...(type === 'sample' && {sample_name: sampleName}),
        };

        if (isItUpdate) {
            if (type === 'sample') {
                handleUpdateSampleMessage(id, data as SampleMessageData);
            } else {
                handleUpdateMessage(id, data as MessageData);
            }
        } else {
            if (type === 'sample') {
                // if (data.sample_name) {
                handleAddSampleMessage(data as SampleMessageData);
            } else {
                handleAddMessage(data as MessageData);
                // }
            }
        }
    }

    const handleDelete = () => {
        type === 'sample' ?
            handleDeleteSampleMessageById(id as number) :
            handleDeleteMessageById(id as number);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="p-6 bg-white border border-cyan-800/20 rounded-lg">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-4">
                    <label htmlFor="message_text" className="text-cyan-800 font-semibold">Текст сообщения</label>
                    <textarea
                        id="message_text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="w-full border border-cyan-800/40 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
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
                />
                <FormField
                    id="sending_date"
                    label="Дата отправки"
                    type="datetime-local"
                    value={sendingDate}
                    onChange={(e) => setSendingDate(e.target.value)}
                />
                <FormField
                    id="recipient_type_id"
                    label="Тип получателя"
                    type="number"
                    value={recipientTypeId || ''}
                    onChange={(e) => setRecipientTypeId(parseInt(e.target.value, 10) || '')}
                    required
                />
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