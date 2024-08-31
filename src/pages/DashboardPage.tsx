import React from 'react';

const DashboardPage = () => {
    return (
        <div className="container mx-auto flex flex-wrap justify-between border-2 border-solid border-green-500 px-4 py-3 ">
            {/*<h2 className="text-center">Ближайшие рассылки</h2>*/}
            <div className="bg-slate-300 w-[49%] border-2 border-solid border-red-500 rounded-md">
                <div className="py-3">
                    <h3 className="mx-2 mb-3 text-center">Разосланные рассылки</h3>
                    <ul className="flex flex-wrap">
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-slate-300 w-[49%] border-2 border-solid border-red-500 rounded-md">
                <div className="py-3">
                    <h3 className="mx-2 mb-3 text-center">Запланированные рассылки</h3>
                    <ul className="flex flex-wrap">
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                        <li className="py-3 w-1/2 flex justify-evenly">
                            <div className="py-2 px-2 mx-2 bg-slate-400 border-1 border-solid border-grey-900 rounded-lg shadow-2xl">
                                <h4 className="py-1 text-center">Тема</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md ">Lorem ipsum dolor sit amet</p>
                                <h4 className="py-1 text-center">Дата и время отправки</h4>
                                <p className="px-2 text-center bg-slate-300 border-1 border-solid rounded-md">01-01-2000 12:00</p>
                                <h5 className="py-1 text-center">Открыть</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-slate-400 w-full border-2 border-solid border-red-500 rounded-md px-4 py-3">
                Последние добавленные клиенты
            </div>
            <div className="bg-slate-400 w-full border-2 border-solid border-red-500 rounded-md px-4 py-3">
                Клиенты, у которых ошибка в chat_id Телеграмма
            </div>
            <div className="bg-slate-400 w-full border-2 border-solid border-red-500 rounded-md px-4 py-3">
                Клиенты, которые еще не получили выбрали тип
            </div>
        </div>
    );
};

export default DashboardPage;