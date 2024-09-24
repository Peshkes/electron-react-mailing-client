import React, {useContext} from 'react';
import {useQuery} from "react-query";
import {getNearestMessages} from "../../api/fake";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import MailingMessage from "./MailingMessage";

const numberOfMessagesShown: number = 10;

const LatestMailingsGenerator = () => {

    const { data, isLoading, isError } = useQuery(
        ['messages','setNearestMessages'],
        () => getNearestMessages(numberOfMessagesShown),
        {
            keepPreviousData: true,
        }
    );

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;
    return (
        <>
            {data ? data.map((item, index) => (
                <MailingMessage key={index} item={item}/>
            )) : isLoading ? <div>Loading...</div> : isError ? <div>Error</div> : <div>No data</div>}
        </>
    );
};

export default LatestMailingsGenerator;
