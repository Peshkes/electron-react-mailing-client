import React from 'react';
import Plus from "../icons/Plus";

type Props = {
    title: string
    plus: boolean
}

const DashboardTable = (props: Props) => {
    return (
        <div className="w-full h-full flex flex-col justify-start bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
            <div className="w-full py-5  flex justify-between border-b-4 border-solid border-cyan-800/20">
                <p className="pl-7 text-2xl text-cyan-800">{props.title}</p>
                {props.plus ? <div className="flex items-center pr-7"><Plus color="black"/></div> : <></>}
            </div>
            <div className="w-full pb-5 px-7 overflow-auto scroll-smooth scrollbar-none text-cyan-800">
                <div className="w-full py-5 grid grid-cols-2 font-bold sticky top-0 bg-white">
                    <div>Имя</div>
                    <div>Телефон</div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>
                    <div className="grid grid-cols-2 pt-1 ">
                        <div>Иванов Иван Иванович</div>
                        <div>89159999999</div>
                    </div>

                </div>
                {/*<table className="w-full h-full text-left text-cyan-800">*/}
                {/*    <thead className="sticky top-0 bg-white">*/}
                {/*    <tr>*/}
                {/*        <th>Имя</th>*/}
                {/*        <th>Телефон</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody className="">*/}
                {/*    <tr className="bg-transparent border-0 rounded-xl text-white">*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Иванов Иван Иванович</td>*/}
                {/*        <td>89159999999</td>*/}
                {/*    </tr>*/}
                {/*    </tbody>*/}
                {/*</table>*/}
            </div>
        </div>
    );
};

export default DashboardTable;