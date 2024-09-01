import React from 'react';
import Plus from "../icons/Plus";
import LatestMailings from "../components/LatestMailings";
import DashBoard from "../components/DashBoard";

const DashboardPage_old = () => {
    return (
        <div className="w-full h-full bg-slate-100 flex flex-wrap border-4 border-solid border-blue-500 overflow-hidden">
            <LatestMailings/>
            <DashBoard/>
        </div>
    );
};

export default DashboardPage_old;