import React, {useEffect, useState} from 'react';
import {getAllMessages, getAllMessagesWithPagination} from "../api/fake";
import {Message, MessagePaginationResponse, PaginationRequestParams} from "../api/types";
import Cross from "../icons/Cross";
import Pagination from "./Pagination";

const initialMessages: Message[] = [
    {
        id: 1,
        theme: 'Hello',
        message_text: 'Hello World!',
        recipient_type_id: 1,
        sending_date: Date.now()
    }
]
const initialPage: PaginationRequestParams =
    {
        type: 1,
        page: 1,
        limit: 25
    }

const initialState: MessagePaginationResponse =
    {
        data: initialMessages,
        pagination: {
            totalPages: 9,
            total: 125,
            page: 3,
            limit: 25
        }
    }

const MailingsComponent = () => {
    const [mailings, setMailings] = useState(initialState);
    const [page, setPage] = useState(initialPage);

    const handleSetPage = (newPage:number) => {
        const temp: PaginationRequestParams = {
            type: 1,
            page: newPage,
            limit: 25
        }
        setPage(temp);
    };

    // useEffect(() => {
    //     //     getAllMessages()
    //     //         .then((response: Message[]) => {
    //     //             setMailings(response);
    //     //         })
    //     //         .catch(error => {
    //     //             console.error('Error fetching messenger types:', error);
    //     //         });
    //     // }, []);

    useEffect(() => {
        getAllMessagesWithPagination(page)
            .then((response: MessagePaginationResponse) => {
                console.log(response.data);
                setMailings(response);
            })
            .catch(error => {
                console.error('Error fetching messenger types:', error);
            });
    }, [page]);

    return (
        <div className="w-[77%] h-full mx-auto flex flex-col justify-start text-cyan-800">
            <h2 className="w-full text-3xl py-6 pl-4 pr-4">Рассылки</h2>
            <div className="w-[98%] mx-auto mb-4 flex justify-between">
                <div
                    className="w-[32%] h-full px-7 py-4 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <input type="text" placeholder="Поиск" className="w-full"/>
                </div>
                <div
                    className="w-[32%]  h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Типы</h3>
                    <div className="flex justify-between">
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="1"/>
                            <label className="px-7" htmlFor="adult">Взрослые</label>
                        </div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="2"/>
                            <label className="px-7" htmlFor="child">С детьми</label>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[32%]  h-full px-7 py-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold pb-5 ">Дата отправки</h3>
                    <div className="flex justify-between">
                        <input value="date-from" type="datetime-local"/>
                        <input value="date-to" type="datetime-local"/>
                    </div>
                </div>
            </div>
            <div
                className="w-[98%] h-[80%] flex flex-col justify-between mx-auto bg-white border-4 border-solid border-cyan-800/20 rounded-2xl overflow-hidden">
                <div className="">
                    <div className="w-full py-5 px-7 grid grid-cols-4 font-bold sticky top-0 bg-white">
                        <div>Тема</div>
                        <div>Тип</div>
                        <div>Дата</div>
                        <div></div>
                    </div>
                    {mailings.data.map((item, index) => (
                        <div
                            className="px-7 grid grid-cols-4 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                            <div>{item.theme}</div>
                            <div>{item.recipient_type_id}</div>
                            <div>{item.sending_date}</div>
                            <Cross color="#155e75"/>
                        </div>
                    ))}
                </div>
                <div className="w-full text-center pb-5">
                    <Pagination   currentPage={mailings.pagination.page} totalPages={mailings.pagination.totalPages} handleSetPage={(newPage:number) => handleSetPage(newPage)}/>
                </div>
            </div>
        </div>
    );
};

export default MailingsComponent;