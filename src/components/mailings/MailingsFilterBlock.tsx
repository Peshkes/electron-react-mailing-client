import React from 'react';
import TypeMailingFilter from "./TypeMailingFilter";
import DateMailingFilter from "./DateMailingFilter";
import SearchMailing from "./SearchMailing";
import {useMailingsFilter} from "../../stores/useMailingsFilter";

const MailingsFilterBlock = () => {
    const {clearFilter} = useMailingsFilter();
    return (
        <div className="w-full mx-auto mb-4 flex justify-between">
            <TypeMailingFilter/>
            <DateMailingFilter/>
            <div className="w-[32%] h-full flex flex-col justify-between">
                <SearchMailing/>
                <div
                    className="w-full h-[45%] flex flex-col justify-center px-7 py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl shadow-md shadow-slate-700 cursor-pointer hover:shadow-none"
                    onClick={() => clearFilter()}>
                    Сбросить фильтры
                </div>
            </div>
        </div>
    );
};

export default MailingsFilterBlock;
