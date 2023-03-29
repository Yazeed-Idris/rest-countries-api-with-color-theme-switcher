import {Fragment, useEffect, useState} from 'react'
import {Header} from "./components/Header";
import useCountriesData from "./country-data.service.js";
import {CountryInfo} from "./components/CountryInfo.jsx";
function App() {

    const countriesData = useCountriesData();
    return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 px-10 sm:px-20 grid place-items-center'>
            {countriesData.length > 0? <CountryInfo country={countriesData[6]}/> : '' }
        </main>
    </Fragment>
  )
}


export default App
