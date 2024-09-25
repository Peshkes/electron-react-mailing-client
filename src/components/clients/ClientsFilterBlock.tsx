import React from 'react';
import ClientsRadioTypeFilter from "./ClientsRadioTypeFilter";
import ClientsRadioTGErrorFilter from "./ClientsRadioTGErrorFilter";
import ClientsRadioDataFilter from "./ClientsRadioDataFilter";
import {useClientFilter} from "../../stores/useClientFilter";
import Search from "../../common-components/Search";

const ClientsFilterBlock = () => {
    const {clearFilter} = useClientFilter();

    return (
        <div className="w-full mx-auto mb-4 flex justify-between">
            <ClientsRadioDataFilter header={"Искать по"}/>
            <ClientsRadioTypeFilter header={"Фильтр по типу"}/>
            <ClientsRadioTGErrorFilter header={"Ошибка"}/>
            <div className="w-[24%] h-full flex flex-col justify-between">
                <Search  type="clients"/>
                <div
                    className="w-full h-[45%] flex flex-col justify-center px-7 py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl shadow-md shadow-slate-700 cursor-pointer hover:shadow-none"
                    onClick={() => clearFilter()}>
                    Сбросить фильтры
                </div>
            </div>
        </div>
    );
};

export default ClientsFilterBlock;