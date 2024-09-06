import { ClientType, MessengerType } from "../../api/types";
import React, { useEffect, useState } from "react";
import { getMessengerTypes, getRecipientTypes } from "../../api/fake";
import useModal from "../modal-window/useModal";

type TypesContextProps = {
    messengerTypes: MessengerType[];
    clientTypes: ClientType[];
}

const TypesContext = React.createContext<TypesContextProps>({
    messengerTypes: [],
    clientTypes: []
});

type TypesProviderProps = {
    children: React.ReactNode;
}

const TypesProvider: React.FC<TypesProviderProps> = ({ children }) => {
    const [messengerTypes, setMessengerTypes] = useState<MessengerType[]>([]);
    const [clientTypes, setClientTypes] = useState<ClientType[]>([]);
    const { handleOpenModal, ModalComponent } = useModal();

    const fetchTypes = async () => {
        try {
            const [messengerRes, clientRes] = await Promise.all([
                getMessengerTypes(),
                getRecipientTypes()
            ]);
            setMessengerTypes(messengerRes);
            setClientTypes(clientRes);
        } catch (err) {
            handleOpenModal(
                'Ошибка при загрузке данных. Попробуйте снова.',
                undefined,
                undefined,
                retryFetch
            );
        }
    };

    const retryFetch = () => {
        fetchTypes();
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return (
        <>
            <TypesContext.Provider value={{ messengerTypes, clientTypes}}>
                {children}
            </TypesContext.Provider>
            {ModalComponent}
        </>
    );
};

export {TypesProvider, TypesContext};