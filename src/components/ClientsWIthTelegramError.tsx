import React from 'react';

const ClientsWIthTelegramError = () => {
    return (
        <div className="w-[43%] h-full bg-white py-5 mt-4 border-4 border-solid border-cyan-800/10 rounded-2xl">
            <div className="w-full flex justify-between border-b-2 border-solid border-cyan-800/10">
                <p className="py-3 px-16 text-2xl">Ошибки в телеграме</p>
            </div>
            <div className="w-full h-[80%] overflow-auto scroll-smooth scrollbar-none px-16 ">
                <table className="w-full text-left text-cyan-800">
                    <thead className="sticky top-0 bg-white">
                    <tr>
                        <th>Имя</th>
                        <th>Телефон</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td >Иванов Иван Иванович</td>
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

export default ClientsWIthTelegramError;