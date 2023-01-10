import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Sidebar} from './components/Sidebar';
import { Clientes } from "./pages/Clientes";

export default function App() {
    return (
        <div>
            <Header/>
            <div className="flex">
                <Sidebar />
                <Clientes />
            </div>
            <Footer />
        </div>
    );
}