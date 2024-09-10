import React from 'react';
import LatestMailings from "../components/LatestMailings";
import MailingsComponent from "../components/MailingsComponent";

const MailingsPage = () => {
    return (
        <div className="w-full h-full flex flex-wrap overflow-hidden">
            <LatestMailings/>
            <MailingsComponent/>
        </div>
    );
};

export default MailingsPage;