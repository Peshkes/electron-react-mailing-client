import React, {useState, useEffect} from 'react';
import FormField from './FormField';
import DeleteBlock from './DeleteBlock';
import {
    addMessage,
    addSampleMessage,
    deleteMessageById,
    deleteSampleMessageById, getMessageById, getSampleMessageById,
    updateMessage,
    updateSampleMessage
} from "../../api/fake";
import {dateToTimestamp, timestampToDate} from "../../api/parser";
import {SampleMessageData} from "../../api/types";

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
                    updateSampleMessage(id, data as SampleMessageData).then(
                        // TODO: Обработка успешного обновления
                    )
                } else {
                    updateMessage(id, data).then(
                        // TODO: Обработка успешного обновления
                    )
                }
            } else {
                if (type === 'sample') {
                    if (data.sample_name) {
                        addSampleMessage(data as SampleMessageData).then(
                            // TODO: Обработка успешного добавления
                        )
                    }
                } else {
                    addMessage(data).then(
                        // TODO: Обработка успешного добавления
                    )
                }
            }
        }
        ;

        const handleDelete = () => {
            type === 'message' ?
                deleteMessageById(id).then(
                    // TODO: Обработка успешного удаления
                )
                : deleteSampleMessageById(id).then(
                    // TODO: Обработка успешного удаления
                );
        };

        return (
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
        );
    };

    export default MessageForm;