import {Fragment} from 'react'
import {Header} from "./components/Header";
import useCountriesData from "./country-data.service.js";
import {CountryCardsContainer} from "./components/CountryCardsContainer";
import {SearchInput} from "./components/SearchInput";
import {RegionFilterList} from "./components/RegionFilterList";

function App() {

    const countriesData = useCountriesData();

    return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 px-10 sm:px-20 grid place-items-center'>
            <div className='xl:flex justify-between items-center w-full mt-10 mb-5 '>
                <SearchInput />
                <div className='mb-5 xl:mb-0'>

                </div>
                <RegionFilterList />
            </div>
            <CountryCardsContainer countries={countriesData}/>
        </main>
    </Fragment>
  )
}


export default App
