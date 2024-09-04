import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";

import ClientsPage from "./pages/ClientsPage";
import MessagesPage from "./pages/MessagesPage";
import DashboardPage from "./pages/DashboardPage";
import {ChildWindowProvider} from "./components/child-window/ChildWindowProvider";


const App = () => {
    return (
        <div className={'App bg-cyan-800/5 h-screen h-max-screen flex flex-col'}>
            <Header/>
            <ChildWindowProvider>
                <Routes>
                    <Route path={"/"} element={<DashboardPage/>}/>
                    <Route path={"/clients"} element={<ClientsPage/>}/>
                    <Route path={"/messages"} element={<MessagesPage/>}/>
                </Routes>
            </ChildWindowProvider>
        </div>
    );
};

export default App;