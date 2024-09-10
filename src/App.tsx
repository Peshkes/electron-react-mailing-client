import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";

import MailingsPage from "./pages/MailingsPage";
import ClientPage from "./pages/ClientPage";
import DashboardPage from "./pages/DashboardPage";
import {ChildWindowProvider} from "./components/context-providers/ChildWindowProvider";
import {TypesProvider} from "./components/context-providers/TypesProvider";


const App = () => {
    return (
        <div className={'App bg-cyan-800/5 h-screen h-max-screen flex flex-col overflow-hidde'}>
            <Header/>
            <TypesProvider>
                <ChildWindowProvider>
                    <Routes>
                        <Route path={"/"} element={<DashboardPage/>}/>
                        <Route path={"/messages"} element={<MailingsPage/>}/>
                        <Route path={"/clients"} element={<ClientPage/>}/>
                    </Routes>
                </ChildWindowProvider>
            </TypesProvider>
        </div>
    );
};

export default App;