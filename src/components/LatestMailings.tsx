import React from 'react';
import Plus from "../icons/Plus";

const LatestMailings = () => {
    return (
        <div className="w-[21%] h-full bg-cyan-800 flex flex-col justify-start px-4 py-3 mr-4 ">
            <div className="w-full flex justify-between">
                <h2 className="text-center text-white">Ближайшие рассылки</h2>
                <Plus/>
            </div>
            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-none">
                <div className="w-[98%] h-auto bg-white px-2 py-2 mx-auto border-0 rounded-md my-4 shadow-xl p-3 cursor-pointer  hover:w-full duration-300">
                    <div className="text-center"><p>Lorem ipsum dolor sit amet.</p></div>
                    <div className="flex justify-between"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="flex justify-between"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="flex justify-between"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div className="w-[98%] h-auto bg-white px-2 py-2 mx-auto border-0 rounded-md my-4 shadow-xl p-3 cursor-pointer  hover:w-full duration-300">
                    <div className="text-center"><p>Lorem ipsum dolor sit amet.</p></div>
                    <div className="flex justify-between"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="flex justify-between"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="flex justify-between"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>
                <div className="w-[98%] h-auto bg-white px-2 py-2 mx-auto border-0 rounded-md my-4 shadow-xl p-3 cursor-pointer  hover:w-full duration-300">
                    <div className="text-center"><p>Lorem ipsum dolor sit amet.</p></div>
                    <div className="flex justify-between"><p>Тип: </p><p>Взрослый</p></div>
                    <div className="flex justify-between"><p>Медиа: </p><p>Lorem.png</p></div>
                    <div className="flex justify-between"><p>Дата: </p><p>01-01-2000 19:00</p></div>
                </div>






            </div>
        </div>
    );
};

export default LatestMailings;