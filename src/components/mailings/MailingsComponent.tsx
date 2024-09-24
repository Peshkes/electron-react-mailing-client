import React, {useContext, useState} from 'react';
import AllMailingsTable from "./AllMailingsTable";
import Plus from "../../icons/Plus";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";

import {TypesContext} from "../context-providers/TypesProvider";
import {getAllFilteredMessages} from "../../api/fake";
import {MessagesComplexObjectRequest} from "../../api/types";
import {dateToTimestamp} from "../../api/parser";
import RadioButton from "../../common-components/RadioButton";
import MailingsFilterBlock from "./MailingsFilterBlock";

const MailingsComponent = () => {
    const childWindow = useContext(ChildWindowContext);
    const handleOpenChildWindow = () => {
        if (childWindow) {
            childWindow.openChildWindow({type: 'message', id: 0});
        } else
            console.log('childWindow is null');
    };

    return (
        <div className="w-[75%] h-full mx-auto flex flex-col justify-start text-cyan-800 p-4">
            <div className="w-full flex justify-between">
                <h2 className="w-full text-3xl pt-2 pb-6">Рассылки</h2>
                <div className="flex flex-col justify-center pt-2 pb-6 cursor-pointer">
                    <Plus color={"#155e75"} onClickFunction={handleOpenChildWindow}/>
                </div>
            </div>
            <MailingsFilterBlock/>
            <AllMailingsTable/>
        </div>
    );
};

export default MailingsComponent;
