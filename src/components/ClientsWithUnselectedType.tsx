import React from 'react';

const ClientsWithUnselectedType = () => {
    return (
        <div className="w-[55%] h-full bg-white py-5 mt-4 border-4 border-solid border-cyan-800/10 rounded-2xl">
            <div className="w-full border-b-2 border-solid border-cyan-800/10">
                <p className="py-3 px-16 text-2xl">Клиенты без типа</p>
            </div>
            <div className="w-full h-[80%]  px-16 overflow-auto scroll-smooth scrollbar-none">
                <table className="w-full text-left text-cyan-800">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th>Имя</th>
                            <th>Телефон</th>
                        </tr>
                    </thead>
                    <tbody className="">
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
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    </tbody>
                </table>
                {/*<div className="w-full flex justify-evenly ">*/}
                {/*    <p className="p-1">Имя</p>*/}
                {/*    <p className="p-1">Телефон</p>*/}
                {/*</div>*/}
                {/*<div className="w-full flex justify-evenly ">*/}
                {/*    <p className="p-1">Иванов Иван Иванович</p>*/}
                {/*    <p className="p-1">89159999999</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ClientsWithUnselectedType;