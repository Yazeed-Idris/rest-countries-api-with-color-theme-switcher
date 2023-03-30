import {Fragment} from 'react'
import {Header} from "./components/Header";
import useCountriesData from "./country-data.service.js";
import {CountryCardsContainer} from "./components/CountryCardsContainer";

function App() {

    const countriesData = useCountriesData();

    return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 px-10 sm:px-20 grid place-items-center'>
            <CountryCardsContainer countries={countriesData}/>
        </main>
    </Fragment>
  )
}


export default App
