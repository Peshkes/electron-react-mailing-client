import React from 'react';
import Plus from "../icons/Plus";
import ClientsWithUnselectedType from "./ClientsWithUnselectedType";
import Templates from "./Templates";
import LatestAddedClients from "./LatestAddedClients";
import ClientsWIthTelegramError from "./ClientsWIthTelegramError";

const DashBoard = () => {
    return (
        <div className="w-[77%] h-[92%] ">
            <h2 className="w-full text-3xl my-8 mx-auto pl-4 pr-8">Дашборд</h2>
            <div className="w-full h-full flex flex-col justify-between mx-auto pb-8 pl-4 pr-8">
                <div className="w-full h-[30%] flex justify-between">
                    <ClientsWithUnselectedType/>
                    <Templates/>
                </div>
                <div className="w-full h-[68%] flex justify-between">
                    <LatestAddedClients/>
                    <ClientsWIthTelegramError/>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;