import React, {useContext, useState} from 'react';
import AllMailingsTable from "./AllMailingsTable";
import Plus from "../../icons/Plus";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";

import {TypesContext} from "../context-providers/TypesProvider";
import {getAllFilteredMessages} from "../../api/fake";
import {MessagesComplexObjectRequest} from "../../api/types";
import {dateToTimestamp} from "../../api/parser";

const MailingsComponent = () => {
    const [fromDate, setFromInDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [checkedAdults, setCheckedAdults] = useState(false);
    const [checkedChildren, setCheckedChildren] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [type, setType] = useState(-1);
    const childWindow = useContext(ChildWindowContext);
    const clientTypes = useContext(TypesContext).clientTypes;
    const handleOpenChildWindow = () => {
        if (childWindow) {
            childWindow.openChildWindow({type: 'message', id: 0});
        } else
            console.log('childWindow is null');
    };

    const handleSetClientType = (type: string) => {
        if (type === "Взрослые") {
            setCheckedAdults(true);
            setCheckedChildren(false);
        } else {
            setCheckedAdults(false);
            setCheckedChildren(true);
        }
        let index: number = -1;
        clientTypes.map(item => (
            item.type_name == type ? index = item.id : index = -1
        ));
        setType(index);
    }

    const handleSearch = () => {
        const searchParams = {
            page: 1,
            limit: 15,
        } as MessagesComplexObjectRequest;
        if(type > 0)
            searchParams["type_id"] = type;
        if(fromDate !== '')
            searchParams["date_from"] = dateToTimestamp(fromDate);
        if(toDate !== '')
            searchParams["date_to"] = dateToTimestamp(toDate);
        if(searchValue !== '')
            searchParams["search_string"] = searchValue;


        return getAllFilteredMessages(searchParams as MessagesComplexObjectRequest);
    }
    const clearFilters = () => {
        setFromInDate('');
        setToDate('');
        setType(-1);
        setCheckedAdults(false);
        setCheckedChildren(false);
        setSearchValue('');
    }


    return (
        <div className="w-[75%] h-full mx-auto flex flex-col justify-start text-cyan-800 p-4">
            <div className="w-full flex justify-between">
                <h2 className="w-full text-3xl pt-2 pb-6">Рассылки</h2>
                <div className="flex flex-col justify-center pt-2 pb-6 cursor-pointer">
                    <Plus color={"#155e75"} onClickFunction={handleOpenChildWindow}/>
                </div>
            </div>
            <div className="w-full mx-auto mb-4 flex justify-between">
                <div
                    className="w-[32%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Фильтр по типу</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="adult">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="adult"
                                    value="Взрослые"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    checked={checkedAdults}/>
                                <span
                                    className="absolute bg-cyan-800 w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="adult">Взрослые</label>
                        </div>
                        <div className="pt-1">
                            <label className="relative cursor-pointer" htmlFor="adult">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="child"
                                    value="Семья с детьми"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    checked={checkedChildren}/>
                                <span
                                    className="absolute bg-cyan-800 w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="child">Семья с детьми</label>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[32%] h-full px-7 py-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold pb-5 ">Фильтр по дате отправки</h3>
                    <div className="flex flex-col">
                        <input id="date-from" type="datetime-local" name="date-from" value={fromDate}
                               onChange={(e) => setFromInDate(e.target.value)}/>
                        <input id="date-to" type="datetime-local" name="date-to" value={toDate}
                               onChange={(e) => setToDate(e.target.value)}/>
                    </div>
                </div>
                <div className="w-[32%] h-full flex flex-col justify-between">
                    <div
                        className="w-full h-[45%] px-7 py-5 flex flex-col justify-center bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="w-full"
                            value={searchValue}
                            onChange={(e)=> {
                                setSearchValue(e.currentTarget.value);
                                handleSearch();
                            }}
                        />
                    </div>
                    <div
                        className="w-full h-[45%] flex flex-col justify-center px-7 py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl shadow-md shadow-slate-700 cursor-pointer hover:shadow-none"
                        onClick={() => clearFilters()}>
                        Сбросить фильтры
                    </div>
                </div>
            </div>
            <AllMailingsTable/>
        </div>
    );
};

export default MailingsComponent;
