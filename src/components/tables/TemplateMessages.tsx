import React, {useContext, useEffect, useState} from 'react';
import {SampleMessage} from "../../api/types";
import {getAllSampleMessages} from "../../api/fake";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import {useQuery} from "react-query";

const TemplateMessages = () => {
    const { data, isLoading, isError } = useQuery(
        ['getSamples'],
        () => getAllSampleMessages(),
        {
            keepPreviousData: true,
        }
    );
    const childWindow = useContext(ChildWindowContext);

    const handleOpenSample = (id:number) => childWindow?.openChildWindow({type: 'sample', id: id});

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    if (!data) return <div>No data</div>;

    return (
        data.map((item, index) => (
            <div key={index} tabIndex={item.id} onClick={(e) => handleOpenSample(e.currentTarget.tabIndex)}
                 className="px-7 pt-1 cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white ">
                <div>{item.theme}</div>
            </div>)
        ));
};

export default TemplateMessages;
