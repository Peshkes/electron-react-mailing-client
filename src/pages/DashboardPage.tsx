import React from 'react';
import LatestMailings from "../components/LatestMailings";
import DashBoardComponent from "../components/DashBoardComponent";

const DashboardPage_old = () => {
    return (
        <div className="w-full h-full flex flex-wrap overflow-hidden">
            <LatestMailings/>
            <DashBoardComponent/>
        </div>
    );
};

export default DashboardPage_old;