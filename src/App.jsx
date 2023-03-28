import {Fragment, useEffect, useState} from 'react'
import {Header} from "./components/Header";
import {CountryCard} from "./components/CountryCard";
function App() {

    const countriesData = useCountriesData()



  return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 grid place-items-center'>
            <CountryCard country={{
                ...countriesData[0],
                capital: ['first', 'second']
            }} />
        </main>
    </Fragment>
  )
}

function useCountriesData() {
    const [countriesData, setCountriesData] = useState([])

    useEffect( () => {
        console.time('fetching time')
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((countriesData) => {
                setCountriesData(countriesData);
            });
        console.timeEnd('fetching time')
    }, [])


    return countriesData;
}

export default App
