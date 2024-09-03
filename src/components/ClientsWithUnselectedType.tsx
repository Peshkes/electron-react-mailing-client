import React from 'react';

const ClientsWithUnselectedType = () => {
    return (
        <div className="w-[55%] h-full flex flex-col justify-start bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
            <div className="w-full py-5 border-b-4 border-solid border-cyan-800/20">
                <p className="px-16 text-2xl text-cyan-800">Клиенты без типа</p>
            </div>
            <div className="w-full px-16 overflow-auto scroll-smooth scrollbar-none">
                <table className="w-full h-full text-left text-cyan-800">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th>Имя</th>
                            <th>Телефон</th>
                        </tr>
                    </thead>
                    <tbody className="">
                    <tr className="bg-transparent border-0 rounded-xl text-white">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientsWithUnselectedType;