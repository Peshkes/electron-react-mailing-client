import React from 'react';
import RadioButton from "../../common-components/RadioButton";

import {useClientFilter} from "../../stores/useClientFilter";
import RadioDataFilter from "./RadioDataFilter";

type Props = {
    header: string
}
const ClientsRadioDataFilter = ({header}:Props) => {
    const obj = ["Имени","Телефону"];

    const {search_type, setSearchType} = useClientFilter();

    const handleSetSearchType = (search_type: string) => {
        setSearchType(search_type);
    }
    return (
        <RadioDataFilter header={header}>
            {obj.map((item,index)  => (
                <RadioButton name={'client_data_filter'}  onChange={() => handleSetSearchType(item)} value={item} checked={search_type === item} key={index+1}/>
            ))}
        </RadioDataFilter>

    );
};

export default ClientsRadioDataFilter;