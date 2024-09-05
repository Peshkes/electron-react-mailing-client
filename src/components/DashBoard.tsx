import React, {useContext} from 'react';
import {ChildWindowContext} from "./child-window/ChildWindowProvider";
import TableWrapper from "./TableWrapper";
import NoTypeClients from "./tables/NoTypeClients";
import TemplateMessages from "./tables/TemplateMessages";
import LatestAddedClients from "./tables/LatestAddedClients";
import TgErrorClients from "./tables/TgErrorClients";

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
                        <TableWrapper title="Клиенты без типа" table={<NoTypeClients/>}/>
                    </div>
                    <div className="w-[43%]">
                        <TableWrapper title="Шаблоны" plusFunction={handleOpenSample}  table={<TemplateMessages/>}/>
                    </div>
                </div>
                <div className="w-full h-[55%] mt-6 flex justify-between">
                    <div className="w-[55%]">
                        <TableWrapper title="Последние клиенты" plusFunction={handleOpenClient}  table={<LatestAddedClients/>}/>
                    </div>
                    <div className="w-[43%]">
                        <TableWrapper title="Ошибки в телеграме"  table={<TgErrorClients/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;