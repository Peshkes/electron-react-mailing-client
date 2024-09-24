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
                <div
                    className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Искать по</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="name">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="name"
                                    value="name"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="name">Имени</label>
                        </div>
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="phone">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="phone"
                                    value="phone"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="phone">Телефону</label>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">По типу</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="adult">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="Взрослые"
                                    value="Взрослые"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="adult">Взрослые</label>
                        </div>
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="child">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="child"
                                    value="Семья с детьми"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="child">С детьми</label>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[24%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Ошибка</h3>
                    <div className="flex flex-col">
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="error">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="error"
                                    value="error"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="error">Да</label>
                        </div>
                        <div className="pt-1 ">
                            <label className="relative cursor-pointer" htmlFor="noError">
                                <input
                                    type="radio"
                                    name="typeSelect"
                                    id="noError"
                                    value="noError"
                                    className="appearance-none peer h-4 w-4 cursor-pointer bg-white border-2 border-solid border-cyan-800/20  transition-all"
                                    // onChange={(e) => handleSetClientType(e.currentTarget.value)}
                                    // checked={checkedAdults}
                                />
                                <span
                                    className="absolute bg-cyan-800 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
                            </label>
                            <label className="px-7 cursor-pointer" htmlFor="noError">Нет</label>
                        </div>
                    </div>
                </div>
                <div className="w-[24%] h-full flex flex-col justify-between">
                    <div
                        className="w-full h-[45%] px-7 py-5 flex flex-col justify-center bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                        <input type="text" placeholder="Поиск" className="w-full"/>
                    </div>
                    <div
                        className="w-full h-[45%] flex flex-col justify-center px-7 py-5 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl shadow-md shadow-slate-700 cursor-pointer hover:shadow-none">
                        Сбросить фильтры
                    </div>
                </div>
            </div>
            <AllClientsTable/>
        </div>
    );
};

export default MailingsComponent;
