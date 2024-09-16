import React, {useContext, useState} from 'react';
import Plus from "../icons/Plus";
import {getAllMessagesWithPagination, getNearestMessages} from "../api/fake";
import {Message} from "../api/types";
import MailingMessage from "./MailingMessage";
import {ChildWindowContext} from "./context-providers/ChildWindowProvider";
import {useQuery} from "react-query";

const numberOfMessagesShown: number = 10;
const LatestMailings = () => {

    const { data, isLoading, isError } = useQuery(
        ['setNearestMessages'],
        () => getNearestMessages(numberOfMessagesShown),
        {
            keepPreviousData: true,
        }
    );

    const childWindow = useContext(ChildWindowContext);
    const handleOpenChildWindow = () => {
        if (childWindow) {
            childWindow.openChildWindow({type: 'message', id: 0});
        } else
            console.log('childWindow is null');
    };

    return (
        <div className="w-[25%] h-full bg-cyan-800 flex flex-col justify-start px-4 py-4">
            <div className="w-full flex justify-between">
                <h2 className="text-center text-white mb-2 text-2xl">Ближайшие рассылки</h2>
                <div className="flex items-center cursor-pointer"><Plus color="white" onClickFunction={handleOpenChildWindow}/></div>
            </div>
            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-none text-white">
                {data ? data.map((item, index) => (
                    <MailingMessage key={index} item={item}/>
                )) : isLoading ? <div>Loading...</div> : isError ? <div>Error</div> : <div>No data</div>}
            </div>
        </div>
    );
};

export default LatestMailings;
