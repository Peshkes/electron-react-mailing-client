import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import ClientPage from "./pages/ClientPage";
import MessagesPage from "./pages/MessagesPage";
import MessagePage from "./pages/MessagePage";

const App = () => {

    return (
        <div className={'App'}>
            {/*<Header/>*/}
            <DashboardPage/>
            <div className="flex justify-center items-center h-screen">
                <Routes>
                    <Route path={"/"} element={<DashboardPage/>}/>
                    <Route path={"/clients"} element={<ClientsPage/>}/>
                    <Route path={"/client/:id"} element={<ClientPage/>}/>
                    <Route path={"/messages"} element={<MessagesPage/>}/>
                    <Route path={"/message/:id"} element={<MessagePage/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;