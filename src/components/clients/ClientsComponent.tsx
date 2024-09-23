import React, {useContext} from 'react';

import Plus from "../../icons/Plus";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import AllClientsTable from "./AllClientsTable";


const MailingsComponent = () => {
    const childWindow = useContext(ChildWindowContext);
    const handleOpenChildWindow = () => {
        if (childWindow) {
            childWindow.openChildWindow({type: 'client', id: 0});
        } else
            console.log('childWindow is null');
    };


    return (
        <div className="w-[75%] h-full mx-auto flex flex-col justify-start text-cyan-800 p-4">
            <div className="w-full flex justify-between">
                <h2 className="w-full text-3xl pt-2 pb-6">Клиенты</h2>
                <div className="flex flex-col justify-center pt-2 pb-6 cursor-pointer">
                    <Plus color={"#155e75"} onClickFunction={handleOpenChildWindow}/>
                </div>
            </div>
            <div className="w-full mx-auto mb-4 flex justify-between">
                <div className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Расположить по</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="1"/>
                            <label className="px-7" htmlFor="adult">Имени</label>
                        </div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="child" value="2"/>
                            <label className="px-7" htmlFor="child">Телефону</label>
                        </div>
                    </div>
                </div>
                <div className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">По типу</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="1"/>
                            <label className="px-7" htmlFor="adult">Взрослые</label>
                        </div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="child" value="2"/>
                            <label className="px-7" htmlFor="child">С детьми</label>
                        </div>
                    </div>
                </div>
                <div className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Ошибка</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="adult" value="1"/>
                            <label className="px-7" htmlFor="adult">Да</label>
                        </div>
                        <div className="pt-1 ">
                            <input type="radio" name="typeSelect" id="child" value="2"/>
                            <label className="px-7" htmlFor="child">Нет</label>
                        </div>
                    </div>
                </div>
                <div className="w-[24%] h-full flex flex-col justify-between">
                    <div className="w-full h-[45%] px-7 py-5 flex flex-col justify-center bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                        <input type="text" placeholder="Поиск" className="w-full"/>
                    </div>
                    <div className="w-full h-[45%] flex flex-col justify-center px-7 py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl shadow-md shadow-slate-700 cursor-pointer hover:shadow-none">
                        Сбросить фильтры
                    </div>
                </div>
            </div>
            <AllClientsTable/>
        </div>
    );
};

export default MailingsComponent;
