import React, {useContext} from 'react';

import Pagination from "../pagination/Pagination";
import {useQuery} from "react-query";
import {sendDelayedMessage} from "../../api/fake";
import {timestampToDateFormatted} from "../../api/parser";
import Sending_plane from "../../icons/Sending_plane";

import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import {TypesContext} from "../context-providers/TypesProvider";
import {useMailingsFilter} from "../../stores/useMailingsFilter";

const AllMailingsTable = () => {
    const {page, setPage, fetchMailings, type_id, date_to, date_from, search_string} = useMailingsFilter();
    const {data, isLoading, isError} = useQuery(
        ['messages', 'fetchMailings', page, type_id, date_to, date_from, search_string],
        () => fetchMailings(),
        {
            keepPreviousData: true,
        }
    );

    const childWindow = useContext(ChildWindowContext);
    const {clientTypes} = useContext(TypesContext);

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;

    const handleSendRightNow = (e: number) => {
        return sendDelayedMessage(e);
    }

    const handleOpenMessage = (id: number) => childWindow?.openChildWindow({type: 'message', id: id});

    return (
        <div
            className="w-full h-full flex flex-col justify-between bg-white border-4 border-solid border-cyan-800/20 rounded-2xl overflow-hidden">
            <div>
                <div className="w-[75%] py-5 px-7 grid grid-cols-3 font-bold sticky top-0 bg-white">
                    <div>Тема</div>
                    <div>Тип</div>
                    <div>Дата</div>
                </div>
                <div className="overflow-auto">
                    {data.data.map((item, index) => (
                        <div className="w-full flex" key={index + item.id}>
                            <div
                                key={index}
                                tabIndex={item.id}
                                className="w-[75%] px-7 grid grid-cols-3 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white"
                                onClick={(e) => handleOpenMessage(e.currentTarget.tabIndex)}>
                                <div>{item.theme}</div>
                                <div>
                                    {clientTypes.map((client, index) => (
                                        client.id == item.recipient_type_id ?
                                            <p key={index}>{client.type_name}</p> : <></>
                                    ))}
                                </div>
                                <div>{timestampToDateFormatted(item.sending_date)}</div>
                            </div>
                            <div tabIndex={item.id} className="w-[25%] flex justify-center cursor-pointer"
                                 onClick={(e) => handleSendRightNow(e.currentTarget.tabIndex)}>
                                <Sending_plane color="#155e75"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {data.pagination && (
                <div className="w-full text-center pb-4">
                    <Pagination
                        currentPage={data.pagination.page}
                        totalPages={data.pagination.totalPages}
                        handleSetPage={setPage}
                    />
                </div>
            )}
        </div>
    );
};

export default AllMailingsTable;
