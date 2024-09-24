import React from 'react';
import {getClientsWithUnselectedType} from "../../api/fake";



import {useQuery} from "react-query";
import ClientWIthUnselectedType from "./ClientWIthUnselectedType";


const LatestMailings = () => {

    const { data, isLoading, isError } = useQuery(
        ['getClientsWithUnselectedType'],
        () => getClientsWithUnselectedType(),
        {
           keepPreviousData: true,
        }
    );

    if (isLoading) return <div className="flex justify-center items-center w-full h-full">Загрузка...</div>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;

    return (
        <div className="w-[25%] h-full bg-cyan-800 flex flex-col justify-start px-4 py-4">
            <div className="w-full flex justify-between">
                <h2 className="text-start text-white mb-2 text-2xl">Необходимо выбрать тип</h2>
            </div>
            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-none text-white">
                {data ? data.map((item, index) => (
                    <ClientWIthUnselectedType key={index} item={item}/>
                )) : isLoading ? <div>Loading...</div> : isError ? <div>Error</div> : <div>No data</div>}
            </div>
        </div>
    );
};

export default LatestMailings;
