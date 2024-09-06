import React from 'react';

type Props = {
    closeFunction: () => void
    children: React.ReactNode
}

const WrapperBackgroundModal = ({children, closeFunction} : Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
            <button onClick={closeFunction}
                    className="absolute top-4 right-4 bg-cyan-600 text-white w-10 h-10 rounded-full border border-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex justify-center items-center">
                x
            </button>
            {children}
        </div>
    );
};

export default WrapperBackgroundModal;