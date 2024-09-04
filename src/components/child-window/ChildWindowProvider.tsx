import ChildWindow, { ChildWindowFunctionProps } from "./ChildWindow";
import React, { FC, ReactNode } from "react";

type ChildWindowState = {
    type: 'client' | 'message' | 'sample' | null;
    id: number | null;
    isOpen: boolean;
};

type ChildWindowContextProps = {
    openChildWindow: (props: ChildWindowFunctionProps) => void;
}

const ChildWindowContext = React.createContext<ChildWindowContextProps | undefined>(undefined);

type ChildWindowProviderProps = {
    children: ReactNode;
}

const ChildWindowProvider: FC<ChildWindowProviderProps> = ({ children }) => {
    const [childWindow, setChildWindow] = React.useState<ChildWindowState>({
        type: null,
        id: null,
        isOpen: false,
    });

    const openChildWindow = ({ type, id }: ChildWindowFunctionProps) => {
        setChildWindow({ type, id, isOpen: true });
    };

    const closeChildWindow = () => {
        setChildWindow({ type: null, id: null, isOpen: false });
    };

    return (
        <ChildWindowContext.Provider value={{ openChildWindow }}>
            {children}
            {childWindow.isOpen && childWindow.type && childWindow.id !== null && (
                <ChildWindow
                    type={childWindow.type}
                    id={childWindow.id}
                    closeFunction={closeChildWindow}
                />
            )}
        </ChildWindowContext.Provider>
    );
};

export { ChildWindowProvider, ChildWindowContext };