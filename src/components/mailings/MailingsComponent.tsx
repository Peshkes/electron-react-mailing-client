import React from 'react';
import AllMailingsTable from "./AllMailingsTable";

const MailingsComponent = () => {
    return (
        <div className="w-[75%] h-full mx-auto flex flex-col justify-start text-cyan-800 p-4">
            <h2 className="w-full text-3xl pt-2 pb-6">Рассылки</h2>

            <div className="w-full mx-auto mb-4 flex justify-between">
                <div className="w-[32%] h-full px-7 py-4 bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <input type="text" placeholder="Поиск" className="w-full"/>
                </div>
                <div className="w-[32%] h-full px-7 pb-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold py-5 ">Типы</h3>
                    <div className="flex justify-between">
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
                <div className="w-[32%] h-full px-7 py-5 flex flex-col bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
                    <h3 className="font-bold pb-5 ">Дата отправки</h3>
                    <div className="flex justify-between">
                        <input value="date-from" type="datetime-local"/>
                        <input value="date-to" type="datetime-local"/>
                    </div>
                </div>
            </div>
            <AllMailingsTable/>
        </div>
    );
};

export default MailingsComponent;
