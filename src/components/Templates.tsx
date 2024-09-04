import React from 'react';
import Plus from "../icons/Plus";

const Templates = () => {
    return (
        <div className="w-[43%] h-full flex flex-col justify-start  bg-white pt-5 border-4 border-solid border-cyan-800/20 rounded-2xl">
            <div className="w-full pb-5  flex justify-between border-b-4 border-solid border-cyan-800/20">
                <p className="pl-16 text-2xl text-cyan-800">Шаблоны</p>
                <div className="flex items-center pr-16"><Plus color="black" onClickFunction={() => {
                    console.log('I AM ALIVE')
                }}/></div>
            </div>
            <div className="w-full px-16 overflow-auto scroll-smooth scrollbar-none">
            <table className="w-full text-left text-cyan-800">
                    <thead className="sticky top-0 bg-white">
                    <tr>
                        <th>Имя</th>
                        <th>Телефон</th>
                    </tr>
                    </thead>дада? я
                    <tbody>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>
                    <tr className="pt-1">
                        <td>Иванов Иван Иванович</td>
                        <td>89159999999</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Templates;