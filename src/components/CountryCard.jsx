import {extractShortCountryInfo} from "../country-data.service.js";
import {useEffect, useState} from "react";

export const CountryCard = ({country, index}) => {

    console.log('country:', country)

    const [capitals, imageUrl, population, region, countryName] = extractShortCountryInfo(country)
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShowElement(true), 100 * index)
        return () => clearTimeout(timeout)
    }
    , [index])

    const numberFormatter = Intl.NumberFormat('en-US');
    return <div className={`${showElement? 'opacity-100' : 'opacity-0'} mx-auto xl:mx-0 bg-White dark:bg-Dark-Blue-dark w-72 pb-10 rounded-md shadow-xl font-Nunito-Sans text-Dark-Blue-dark dark:text-White transition-all duration-300`}>
        <div className='w-72 h-48 mb-4'>
            <img className='rounded-t-md w-full h-full object-cover' src={imageUrl} alt={`${countryName} flag`}/>
        </div>
        <h2 className='text-xl font-[600] mt-6 mb-4 ml-6'>{countryName}</h2>
        <div className='mt-0 ml-6 text-sm  h-full'>
            <p className='font-[300] my-1'><strong className='font-[600]'>Population:</strong> {numberFormatter.format(population)}</p>
            <p className='font-[300] my-1'><strong className='font-[600]'>Region:</strong> {region}</p>
            <p className='font-[300] my-1'><strong className='font-[600]'>Capital:</strong> {capitals.reduce((text, capital, currentIndex) => text + `${capital}${currentIndex !== capitals.length - 1 ? ', ' : ''}`, '')}</p>
        </div>
    </div>
}