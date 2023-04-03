import {SearchInput} from "../components/SearchInput.jsx";
import {RegionFilterList} from "../components/RegionFilterList.jsx";
import {CountryCardsContainer} from "../components/CountryCardsContainer.jsx";
import {useEffect, useState} from "react";

export default function MainPage({countriesData}) {
    const [filteredCountries, setFilteredCountries] = useState(countriesData);

    useEffect(() => {
        setFilteredCountries(countriesData);
    }
    , [countriesData])

    function setFilterOption(option) {
        if (option === 'Clear' || option === 'Filter by region') {
            setFilteredCountries(countriesData);
        } else {
            setFilteredCountries(countriesData.filter(country => country.region === option))
        }
    }


    function handleChangeText(event) {
        const text = event.target.value;
        if (text === '') {
            setFilteredCountries(countriesData);
        } else {
            setFilteredCountries(countriesData.filter(country => country['name']['common'].toLowerCase().includes(text.toLowerCase())))
        }
    }


    return (
        <div className='flex flex-col w-full h-full justify-start'>
            <div className='xl:flex justify-between items-center w-full mt-10 mb-5 '>
                <SearchInput handleChangeText={handleChangeText}/>
                <div className='mb-5 xl:mb-0'>

                </div>
                <RegionFilterList setFilterOption={setFilterOption}/>
            </div>
            <CountryCardsContainer countries={filteredCountries}/>
        </div>
    )
}
