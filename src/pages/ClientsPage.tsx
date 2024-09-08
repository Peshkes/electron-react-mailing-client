import React from 'react';
import LatestMailings from "../components/LatestMailings";
import ClientsComponent from "../components/ClientsComponent";

const ClientsPage = () => {
    return (
        <div className="w-full h-full flex flex-wrap overflow-hidden">
            <LatestMailings/>
            <ClientsComponent/>
        </div>
    );
};

export default ClientsPage;