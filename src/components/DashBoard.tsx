import React from 'react';
import Plus from "../icons/Plus";
import ClientsWithUnselectedType from "./ClientsWithUnselectedType";
import Templates from "./Templates";
import LatestAddedClients from "./LatestAddedClients";
import ClientsWIthTelegramError from "./ClientsWIthTelegramError";
import DashboardTable from "./DashboardTable";

const DashBoard = () => {
    return (
        <div className="w-[77%] h-[92%] mx-auto">
            <h2 className="w-full text-3xl py-6 pl-4 pr-4">Дашборд</h2>
            <div className="w-full h-full flex flex-col justify-start mx-auto pb-8 px-4">
                <div className="w-full h-[30%] flex justify-between">
                    <div className="w-[55%]">
                        <DashboardTable title="Клиенты без типа" plus={false}/>
                    </div>
                    <div className="w-[43%]">
                        <DashboardTable title="Шаблонны" plus={true}/>
                    </div>
                </div>
                <div className="w-full h-[55%] mt-6 flex justify-between">
                    <div className="w-[55%]">
                        <DashboardTable title="Последние клиенты" plus={true}/>
                    </div>
                    <div className="w-[43%]">
                        <DashboardTable title="Ошибки в телеграме" plus={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;