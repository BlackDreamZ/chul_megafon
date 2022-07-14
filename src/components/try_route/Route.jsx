import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "../form/Form1";
import Result from "./Result";

createStore({
    data: {
        telephone: '',
        email: '',
    }
});

export default function Map() {
    return (
        <StateMachineProvider>
            <Router>
                <Route exact path="/" component={Step1} />
                <Route exact path="/" component={Result} />
            </Router>
        </StateMachineProvider>
    );
}
