import React, {useEffect, useState} from 'react';
import {SampleMessage} from "../../api/types";
import {getAllSampleMessages} from "../../api/fake";

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


const TemplateMessages = () => {
    const [templateMessages, setTemplateMessages] = useState(initialMessagesState);

    useEffect(() => {
        getAllSampleMessages()
            .then((response: SampleMessage[]) => {
                setTemplateMessages(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });
    }, []);
    return (
        templateMessages.map((item, index) => (
            <div key={index}
                 className="px-7 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                <div>{item.theme}</div>
            </div>)
        ));
};

export default TemplateMessages;