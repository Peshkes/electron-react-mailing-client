import React, {useContext, useRef} from 'react';
import {timestampToDateFormatted} from "../../api/parser";
import Pagination from "../pagination/Pagination";
import {useQuery} from "react-query";

import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import {TypesContext} from "../context-providers/TypesProvider";
import {useClientFilter} from "../../stores/useClientFilter";

const AllClientsTable = () => {
    const {page, setPage, fetchClients, type_id, search_type, search_string, tg_error} = useClientFilter();
    const tableRef = useRef<HTMLDivElement>(null);
    // const [page, setPage] = useState(initialPage);
    const {data, isLoading, isError} = useQuery(
        ['clients', 'fetchClients', page, type_id, search_type, search_string, tg_error],
        () => fetchClients(),
        {
            keepPreviousData: true,
        }
    );
    const childWindow = useContext(ChildWindowContext);
    const {clientTypes} = useContext(TypesContext);

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;

    const handleOpenMessage = (id: number) => childWindow?.openChildWindow({type: 'client', id: id});
    return (
        <div
            className="w-full h-full flex flex-col justify-between bg-white border-4 border-solid border-cyan-800/20 rounded-2xl overflow-hidden">
            <div>
                <div className="w-full py-5 px-7 grid grid-cols-5 font-bold sticky top-0 bg-white">
                    <div>ФИО</div>
                    <div>Телефон</div>
                    <div>Дата заезда</div>
                    <div>Дата отъезда</div>
                    <div>Тип</div>
                </div>
                <div ref={tableRef} className="overflow-auto">
                    {data.data.map((item, index) => (
                        <div className="w-full ">
                            <div
                                key={index}
                                tabIndex={item.id}
                                className="w-full px-7 grid grid-cols-5 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white"
                                onClick={(e) => handleOpenMessage(e.currentTarget.tabIndex)}>
                                <div>{item.name}</div>
                                <div>{item.phone_number}</div>
                                <div>{timestampToDateFormatted(item.check_in_date)}</div>
                                <div>{timestampToDateFormatted(item.check_out_date)}</div>
                                <div>
                                    {clientTypes.map((client, index) => (
                                        client.id == item.type_id ?
                                            <p key={index}>{client.type_name}</p> : <></>
                                    ))}
                                </div>
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
                            handleSetPage={setPage}
                        />
                    </div>
                )
            }
        </div>
    )
        ;
};

export default AllClientsTable;