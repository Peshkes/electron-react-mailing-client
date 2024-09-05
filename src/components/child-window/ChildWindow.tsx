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
            <button onClick={closeFunction}
                    className="absolute top-4 right-4 bg-cyan-600 text-white w-10 h-10 rounded-full border border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex justify-center items-center">
                x
            </button>
            <div className="bg-white border-4 border-solid border-cyan-800/20 rounded-2xl p-4 max-w-lg w-full relative">
                {type === 'client' ?
                    <ClientForm id={id}/> :
                    <MessageForm id={id} type={type}/>}
            </div>
        </div>
    );
};

export default ChildWindow;