import React, {useContext, useRef, useState} from 'react';
import {timestampToDateFormatted} from "../../api/parser";
import Pagination from "../pagination/Pagination";
import {PaginationRequestParams} from "../../api/types";
import {useQuery} from "react-query";
import {getAllClients, sendDelayedMessage} from "../../api/fake";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import Cross_chopsticks from "../../icons/Cross_chopsticks";

const initialPage: PaginationRequestParams = {
    type: 1,
    page: 1,
    limit: 15
}

const AllClientsTable = () => {
    const tableRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(initialPage);
    const {data, isLoading, isError} = useQuery(
        ['clients', 'getAllClientsWithPagination', page],
        () => getAllClients(page),
        {
            keepPreviousData: true,
        }
    );
    const childWindow = useContext(ChildWindowContext);

    const handleSetPage = (newPage: number) => {
        setPage(prevState => ({...prevState, page: newPage}));
    };

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;
    const handleSendRightNow = (e:number) =>  {
        return sendDelayedMessage(e);
    }
    const handleOpenMessage = (id: number) => childWindow?.openChildWindow({type: 'client', id: id});
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white border-4 border-solid border-cyan-800/20 rounded-2xl overflow-hidden">
            <div>
                <div className="w-[75%] py-5 px-7 grid grid-cols-4 font-bold sticky top-0 bg-white">
                    <div>ФИО</div>
                    <div>Телефон</div>
                    <div>Дата заезда</div>
                    <div>Дата отъезда</div>
                </div>
                <div ref={tableRef} className="overflow-auto">
                    {data.data.slice(0, page.limit).map((item, index) => (
                        <div className="w-full flex">
                            <div
                                key={index}
                                tabIndex={item.id}
                                className="w-[75%] px-7 grid grid-cols-4 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white"
                                onClick={(e) => handleOpenMessage(e.currentTarget.tabIndex)}>
                                <div>{item.name}</div>
                                <div>{item.phone_number}</div>
                                <div>{timestampToDateFormatted(item.check_in_date)}</div>
                                <div>{timestampToDateFormatted(item.check_out_date)}</div>
                            </div>
                            <div tabIndex={item.id} className="w-[25%] flex justify-center cursor-pointer"
                                 onClick={(e) => handleSendRightNow(e.currentTarget.tabIndex)}>
                                <Cross_chopsticks color={"#155e75"}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {
                data.pagination && (
                    <div className="w-full text-center pb-4">
                        <Pagination
                            currentPage={data.pagination.page}
                            totalPages={data.pagination.totalPages}
                            handleSetPage={handleSetPage}
                        />
                    </div>
                )
            }
        </div>
    )
        ;
};

export default AllClientsTable;