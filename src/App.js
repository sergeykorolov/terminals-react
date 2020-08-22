import React from 'react';
import './App.scss';
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import TerminalsContainer from "./components/Terminals/TerminalsContainer";
import BuyersContainer from "./components/Buyers/BuyersContainer";
import Buyer from "./components/Buyers/Buyer/Buyer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

    return (
        <div className="app-wrapper">
            <Sidebar />
            <div className="content">
                <Switch>
                    <Route exact path='/' render={() => <Login/>}/>
                    <Route exact path="/terminals" render={() => <TerminalsContainer/>}/>
                    <Route exact path="/buyers" render={() => <BuyersContainer/>}/>
                    <Route exact path="/buyers/:buyerId?" component={Buyer}/>
                    <Route path="/" component={ErrorPage}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
