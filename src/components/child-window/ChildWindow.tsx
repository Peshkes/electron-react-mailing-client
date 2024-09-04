import React from 'react';
import ClientForm from "./ClientForm";
import MessageForm from "./MessageForm";

export type ChildWindowFunctionProps = {
    type: 'client' | 'message' | 'sample';
    id: number;
}

type ChildWindowOwnProps = {
    closeFunction: () => void
}

const ChildWindow = ({type, id, closeFunction}: ChildWindowFunctionProps & ChildWindowOwnProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
            <div className="bg-white border-4 border-solid border-cyan-800/20 rounded-2xl p-4 max-w-lg w-full">
                <button onClick={closeFunction} className="absolute top-4 right-4 bg-gray-200 text-gray-600 p-2 rounded-full">x</button>
                {
                    type === 'client' ?
                        <ClientForm id={id}/> :
                        <MessageForm id={id} type={type}/>
                }
            </div>
        </div>
    );
};

export default ChildWindow;