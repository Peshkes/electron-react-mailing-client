import React, {ReactNode} from 'react';
import DashboardTableHeader from "./DashboardTableHeader";


type Props = {
    title: string
    plusFunction?: () => void | undefined
    table: ReactNode
}


const TableWrapper = (props: Props) => {

    return (
        <div
            className="w-full h-full flex flex-col justify-start bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
            <DashboardTableHeader title={props.title} plusFunction={props.plusFunction}/>
            <div className="w-full pb-5 overflow-auto scroll-smooth scrollbar-none text-cyan-800">
                {props.title == "Шаблоны" ?
                    <div className="w-full py-5 px-7 sticky top-0 bg-white">

                    </div> :
                    <div className="w-full py-5 px-7 grid grid-cols-2 font-bold sticky top-0 bg-white">
                        <div>Имя</div>
                        <div>Телефон</div>
                    </div>
                }
                <div className="w-full pb-5 overflow-auto scroll-smooth scrollbar-none text-cyan-800">
                    {props.table}
                </div>
            </div>
        </div>
    );
};

export default TableWrapper;