import React, {useContext} from 'react';
import {updateClientType} from "../../api/fake";
import {Client} from "../../api/types";
import {ChildWindowContext} from "../context-providers/ChildWindowProvider";
import {TypesContext} from "../context-providers/TypesProvider";


type Props = {
    item: Client
}


const ClientWIthUnselectedType = (props: Props) => {
    const childWindow = useContext(ChildWindowContext);
    const clientTypes = useContext(TypesContext).clientTypes;
    const handleOpenClient = (id: number) => childWindow?.openChildWindow({type: 'client', id: id});


    const handleSelectClientType = (type: string, id: number) => {
        let index: number = -1;
        clientTypes.map(item => (
            item.type_name == type ? index = item.id : index = -1
        ));
        return updateClientType(index, id);
    }

    return (
        <div id="tab" tabIndex={props.item.id} onClick={(e) => handleOpenClient(e.currentTarget.tabIndex)}
             className="w-full px-3 py-3 my-4 mx-auto h-auto bg-white/20 border-0 rounded-2xl shadow-xl shadow-slate-700 cursor-pointer hover:shadow-none">
            <div className="flex justify-between text-white"><p>ФИО: </p><p>{props.item.name}</p>
            </div>
            <div className="pt-1 flex justify-between text-white"><p>Телефон: </p><p>{props.item.phone_number}</p></div>
            <div className="pt-1 flex justify-between text-white">
                <p>Тип: </p>
                <select id="selector" name="type_selector" defaultValue="Выберите тип"
                        className="text-cyan-800 text-center border-0 rounded-2xl" required
                    onChange={(e) => handleSelectClientType(e.currentTarget.value, e.currentTarget.parentElement? e.currentTarget.parentElement.tabIndex: -1)}
                        onClick={(e) => e.stopPropagation()}>)
                    <option value="Выберите тип" disabled>Выберите тип</option>
                    <option value="взрослые">Взрослые</option>
                    <option value="семья с детьми">Семья с детьми</option>
                </select>
            </div>
        </div>
    );
};

export default ClientWIthUnselectedType;