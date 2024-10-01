import React from 'react';
import {useQuery} from "react-query";
import {getClientsWithUnselectedType} from "../../api/server";
import ClientWIthUnselectedType from "./ClientWIthUnselectedType";
import Loader from "../Loader";

const ClientsWithUnselectedTypeGenerator = () => {

    const { data, isLoading, isError } = useQuery(
        ['getClientsWithUnselectedType'],
        () => getClientsWithUnselectedType(),
        {
            keepPreviousData: true,
        }
    );

    if (isLoading) return <Loader spinnerColor={'border-t-white'}/>;
    if (isError) return <div className="flex justify-center items-center w-full h-full">Произошла ошибка</div>;
    if (!data) return <div className="flex justify-center items-center w-full h-full">Нет данных</div>;

    return (
        <>
            {data ? data.map((item) => (
                <ClientWIthUnselectedType key={item.id} item={item}/>
            )) : isLoading ? <div>Loading...</div> : isError ? <div>Error</div> : <div>No data</div>}
        </>
    );
};

export default ClientsWithUnselectedTypeGenerator;
