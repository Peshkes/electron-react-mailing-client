import React, {useContext} from 'react';
import DashboardTable from "./DashboardTable";
import {ChildWindowContext} from "./child-window/ChildWindowProvider";

const DashBoard = () => {
    const childWindow = useContext(ChildWindowContext);
    const handleOpenClient = () => childWindow?.openChildWindow({ type: 'client', id: 0 });
    const handleOpenSample = () => childWindow?.openChildWindow({ type: 'sample', id: 0 });

    return (
        <div className="w-[77%] h-[92%] mx-auto">
            <h2 className="w-full text-3xl py-6 pl-4 pr-4">Дашборд</h2>
            <div className="w-full h-full flex flex-col justify-start mx-auto pb-8 px-4">
                <div className="w-full h-[30%] flex justify-between">
                    <div className="w-[55%]">
                        <DashboardTable title="Клиенты без типа"/>
                    </div>
                    <div className="w-[43%]">
                        <DashboardTable title="Шаблонны" plusFunction={handleOpenSample}/>
                    </div>
                </div>
                <div className="w-full h-[55%] mt-6 flex justify-between">
                    <div className="w-[55%]">
                        <DashboardTable title="Последние клиенты" plusFunction={handleOpenClient}/>
                    </div>
                    <div className="w-[43%]">
                        <DashboardTable title="Ошибки в телеграме"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;