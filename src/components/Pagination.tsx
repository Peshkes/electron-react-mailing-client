import React from 'react';


type Props = {
    currentPage: number
    totalPages: number
    handleSetPage: (page: number) => void
}


const Pagination = ({currentPage, totalPages, handleSetPage}: Props) => {
    // let temp = [] as number[];
    // for (let i = totalPages; i > 0; i--) {
    //     temp[i] = i;
    // }

    // return (
    //     <nav className="flex justify-center px-4 py-3">
    //         <div
    //             className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white">{"<"}</div>
    //         {
    //             temp.map((item, index) => (
    //                 <div className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white">
    //                     {item}
    //                 </div>
    //             ))
    //         }
    //         <div
    //             className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white">{">"}</div>
    //     </nav>
    // );


    switch (totalPages) {
        case 1:
            return (
                <nav className="flex justify-center px-4 py-3">
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white"
                        tabIndex={currentPage === 1 ? 1 : currentPage - 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>
                        {"<"}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white"
                        tabIndex={1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>1
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white"
                        tabIndex={currentPage === totalPages ? totalPages : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{">"}</div>
                </nav>
            );
        case 2:
            return (
                <nav className="flex justify-center px-4 py-3">
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === 1 ? 1 : currentPage - 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{"<"}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>1
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={2}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>2
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === totalPages ? totalPages : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{">"}</div>
                </nav>
            );
        case 3:
            return (
                <nav className="flex justify-center px-4 py-3">
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === 1 ? 1 : currentPage - 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{"<"}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>1
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={2}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>2
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={3}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>3
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === totalPages ? totalPages : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}
                    >{">"}</div>
                </nav>
            );
        case 4:
            return (
                <nav className="flex justify-center px-4 py-3">
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === 1 ? 1 : currentPage - 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{"<"}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>1
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={2}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>2
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={3}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>3
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={4}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>4
                    </div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/20 hover:text-white "
                        tabIndex={currentPage === totalPages ? totalPages : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{">"}</div>
                </nav>
            );
        default:
            return (
                <nav className="flex justify-center px-4 py-3">
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={currentPage === 1 ? 1 : currentPage - 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{"<"}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={currentPage === totalPages ? currentPage - 3 : currentPage}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{currentPage === totalPages ? currentPage - 3 : currentPage}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={currentPage === totalPages ? currentPage - 2 : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{currentPage === totalPages ? currentPage - 2 : currentPage + 1}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={currentPage === totalPages ? currentPage - 1 : currentPage + 2}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{currentPage === totalPages ? currentPage - 1 : currentPage + 2}</div>
                    {currentPage < totalPages - 3 ? <div className="mx-1 px-1">...</div> : <></>}
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={totalPages}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{totalPages}</div>
                    <div
                        className="mx-1 px-1 hover:cursor-pointer hover:border-0 hover:border-solid hover:border-cyan-800 hover:rounded-md hover:bg-cyan-800/80 hover:text-white "
                        tabIndex={currentPage === totalPages ? totalPages : currentPage + 1}
                        onClick={e => handleSetPage(e.currentTarget.tabIndex)}>{">"}</div>
                </nav>
            );

    }
};

export default Pagination;