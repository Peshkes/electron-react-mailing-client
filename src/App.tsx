import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";

import ClientsPage from "./pages/ClientsPage";
import ClientPage from "./pages/ClientPage";
import MessagesPage from "./pages/MessagesPage";
import MessagePage from "./pages/MessagePage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {

    return (
        <div className={'App'}>
            <div className="container bg-cyan-800/5 mx-auto flex flex-col justify-start h-screen h-max-screen ">
                <Header/>
                <DashboardPage/>
                {/*<Routes>*/}
                {/*    <Route path={"/"} element={<DashboardPage/>}/>*/}
                {/*    <Route path={"/clients"} element={<ClientsPage/>}/>*/}
                {/*    <Route path={"/client/:id"} element={<ClientPage/>}/>*/}
                {/*    <Route path={"/messages"} element={<MessagesPage/>}/>*/}
                {/*    <Route path={"/message/:id"} element={<MessagePage/>}/>*/}
                {/*</Routes>*/}

            </div>
        </div>
    );
};

export default App;