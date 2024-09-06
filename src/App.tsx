import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";

import ClientsPage from "./pages/ClientsPage";
import MessagesPage from "./pages/MessagesPage";
import DashboardPage from "./pages/DashboardPage";
import {ChildWindowProvider} from "./components/context-providers/ChildWindowProvider";
import {TypesProvider} from "./components/context-providers/TypesProvider";


const App = () => {
    return (
        <div className={'App bg-cyan-800/5 h-screen h-max-screen flex flex-col'}>
            <Header/>
            <TypesProvider>
                <ChildWindowProvider>
                    <Routes>
                        <Route path={"/"} element={<DashboardPage/>}/>
                        <Route path={"/clients"} element={<ClientsPage/>}/>
                        <Route path={"/messages"} element={<MessagesPage/>}/>
                    </Routes>
                </ChildWindowProvider>
            </TypesProvider>
        </div>
    );
};

export default App;