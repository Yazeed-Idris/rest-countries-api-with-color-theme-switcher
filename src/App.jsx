import {Fragment} from 'react'
import {Header} from "./components/Header";
import useCountriesData from "./country-data.service.js";
import MainPage from "./pages/MainPage";
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import CountryInfoPage from "./pages/CountryInfoPage";

function App() {

    const countriesData = useCountriesData();


    return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 px-10 sm:px-20 grid place-items-center'>
            <Routes>
                <Route  path='/' element={<MainPage countriesData={countriesData} />} />
                <Route  path='/country/:index' element={<CountryInfoPage countriesData={countriesData} />} />
            </Routes>
        </main>
    </Fragment>
  )
}


export default App
