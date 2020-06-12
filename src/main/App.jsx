import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

//Importando componentes
// import Header from '../components/Header'
// import Nav from '../components/Nav'
import Insumos from '../components/Insumos'

export default props =>
    <div className="app">
        {/* <Header />
        <Nav /> */}
        <Insumos />
    </div>