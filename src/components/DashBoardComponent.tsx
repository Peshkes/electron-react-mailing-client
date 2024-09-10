import React, {useContext} from 'react';
import {ChildWindowContext} from "./context-providers/ChildWindowProvider";
import TableWrapper from "./TableWrapper";
import TemplateMessages from "./tables/TemplateMessages";
import Clients from "./tables/Clients";
import {getClientsWithTelegramError, getClientsWithUnselectedType, getLastClients} from "../api/fake";

const DashBoardComponent = () => {
    const childWindow = useContext(ChildWindowContext);
    const handleOpenClient = () => childWindow?.openChildWindow({type: 'client', id: 0});
    const handleOpenSample = () => childWindow?.openChildWindow({type: 'sample', id: 0});

    const numberOfShownClients: number = 10;

    return (
        <div className="w-[77%] h-[92%] mx-auto ">
            <h2 className="w-full text-3xl py-6 pl-4 pr-4">Дашборд</h2>
            <div className="w-full h-full flex flex-col justify-start mx-auto pb-8 px-4">
                <div className="w-full h-[30%] flex justify-between">
                    <div className="w-[55%]">
                        <TableWrapper title="Клиенты без типа">
                            <Clients functionToCall={getClientsWithUnselectedType}/>
                        </TableWrapper>
                    </div>
                    <div className="w-[43%]">
                        <TableWrapper title="Шаблоны" plusFunction={handleOpenSample}>
                            <TemplateMessages/>
                        </TableWrapper>
                    </div>
                </div>
                <div className="w-full h-[55%] mt-6 flex justify-between">
                    <div className="w-[55%]">
                        <TableWrapper title="Последние клиенты" plusFunction={handleOpenClient}>
                            <Clients functionToCall={() => getLastClients(numberOfShownClients)}/>
                        </TableWrapper>
                    </div>
                    <div className="w-[43%]">
                        <TableWrapper title="Ошибки в телеграме">
                            <Clients functionToCall={getClientsWithTelegramError}/>
                        </TableWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardComponent;