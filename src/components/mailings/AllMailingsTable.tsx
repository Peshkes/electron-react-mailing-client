import React, { useEffect, useRef, useState } from 'react';
import Cross from "../../icons/Cross";
import Pagination from "../pagination/Pagination";
import { useQuery } from "react-query";
import { getAllMessagesWithPagination } from "../../api/fake";
import { PaginationRequestParams } from "../../api/types";
import {logger} from "react-query/types/react/logger";

const initialPage: PaginationRequestParams = {
    type: 1,
    page: 1,
    limit: 15
}

const AllMailingsTable = () => {
    const tableRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(initialPage);
    const { data, isLoading, isError } = useQuery(
        ['getAllMessagesWithPagination', page],
        () => getAllMessagesWithPagination(page),
        {
            keepPreviousData: true,
        }
    );

    const handleSetPage = (newPage: number) => {
        setPage(prevState => ({ ...prevState, page: newPage }));
    };

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;

    return (
        <div className="w-full h-full flex flex-col justify-between bg-white border-4 border-solid border-cyan-800/20 rounded-2xl overflow-hidden">
            <div>
                <div className="w-full py-5 px-7 grid grid-cols-4 font-bold sticky top-0 bg-white">
                    <div>Тема</div>
                    <div>Тип</div>
                    <div>Дата</div>
                    <div></div>
                </div>
                <div ref={tableRef} className="overflow-auto">
                    {data.data.slice(0, page.limit).map((item, index) => (
                        <div
                            key={index}
                            className="px-7 grid grid-cols-4 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white">
                            <div>{item.theme}</div>
                            <div>{item.recipient_type_id}</div>
                            <div>{item.sending_date}</div>
                            <Cross color="#155e75" />
                        </div>
                    ))}
                </div>
            </div>
            {data.pagination && (
                <div className="w-full text-center pb-4">
                    <Pagination
                        currentPage={data.pagination.page}
                        totalPages={data.pagination.totalPages}
                        handleSetPage={handleSetPage}
                    />
                </div>
            )}
        </div>
    );
};

export default AllMailingsTable;
