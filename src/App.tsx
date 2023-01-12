import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Sidebar} from './components/Sidebar';
import { Clientes } from "./pages/Clientes";
import { Fornecedores } from "./pages/Fornecedores";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Header/>
            <div className="flex">
                <Sidebar />
                <Router>
                    <Routes>
                        <Route  path="/" element={<Home />} />
                        <Route  path="/clientes" element={<Clientes />} />
                        <Route  path="/fornecedores" element={<Fornecedores />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    );
}