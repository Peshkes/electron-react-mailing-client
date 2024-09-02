import React from 'react';
import Plus from "../icons/Plus";
import LatestMailings from "../components/LatestMailings";
import DashBoard from "../components/DashBoard";

const DashboardPage_old = () => {
    return (
        <div className="w-full h-full flex flex-wrap overflow-hidden">
            <LatestMailings/>
            <DashBoard/>
        </div>
    );
};

export default DashboardPage_old;