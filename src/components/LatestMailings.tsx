import React from 'react';
import Plus from "../icons/Plus";

const LatestMailings = () => {
    return (
        <div className="w-[21%] h-full bg-cyan-800 flex flex-col justify-start px-4 py-3 mr-4 ">
            <div className="w-full flex justify-between">
                <h2 className="text-center text-white mb-2 text-2xl">Ближайшие рассылки</h2>
                <div className="flex items-center"><Plus color="white"/></div>
            </div>
            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-none">
                <div className="w-full px-3 py-3 my-8 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                        <div className="flex justify-between text-white"><p >Тема: </p><p>Lorem ipsum dolor sit amet</p></div>
                        <div className="pt-1 flex justify-between text-white"><p >Тип: </p><p>Взрослый</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div className="w-full px-3 py-3 my-8 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                        <div className="flex justify-between text-white"><p >Тема: </p><p>Lorem ipsum dolor sit amet</p></div>
                        <div className="pt-1 flex justify-between text-white"><p >Тип: </p><p>Взрослый</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div className="w-full px-3 py-3 my-8 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                        <div className="flex justify-between text-white"><p >Тема: </p><p>Lorem ipsum dolor sit amet</p></div>
                        <div className="pt-1 flex justify-between text-white"><p >Тип: </p><p>Взрослый</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div className="w-full px-3 py-3 my-8 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer  hover:shadow-none">
                        <div className="flex justify-between text-white"><p >Тема: </p><p>Lorem ipsum dolor sit amet</p></div>
                        <div className="pt-1 flex justify-between text-white"><p >Тип: </p><p>Взрослый</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Медиа: </p><p>Lorem.png</p></div>
                        <div className="pt-1 flex justify-between text-white"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>













            </div>
        </div>
    );
};

export default LatestMailings;