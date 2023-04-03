import {extractShortCountryInfo, shortenCountryName} from "../country-data.service.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const CountryCard = ({country, index}) => {

    const [capitals, imageUrl, population, region, countryName] = extractShortCountryInfo(country)
    const [showElement, setShowElement] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => setShowElement(true), 100 * index)
        return () => clearTimeout(timeout)
    }
    , [index])

    const numberFormatter = Intl.NumberFormat('en-US');
    return <div onClick={() => {navigate(`/country/${index}`)}}
            className={`${showElement ? 'opacity-100' : 'opacity-0'} hover:scale-105 hover:cursor-pointer mx-auto mb-5 xl:mx-0 bg-White dark:bg-Dark-Blue-dark w-60 pb-6 rounded-md shadow-xl font-Nunito-Sans text-Dark-Blue-dark dark:text-White transition-all duration-300`}>
            <div className='w-60 h-40 mb-4'>
                <img className='rounded-t-md w-full h-full object-cover' src={imageUrl} alt={`${countryName} flag`}/>
            </div>
            <h2 className='text-xl font-[600] mt-6 mb-4 ml-6'>{countryName}</h2>
            <div className='mt-0 ml-6 text-sm  '>
                <p className='font-[300] my-1'><strong
                    className='font-[600]'>Population:</strong> {numberFormatter.format(population)}</p>
                <p className='font-[300] my-1'><strong className='font-[600]'>Region:</strong> {region}</p>
                <p className='font-[300] my-1'><strong
                    className='font-[600]'>Capital:</strong> {shortenCountryName(capitals.reduce((text, capital, currentIndex) => text + `${capital}${currentIndex !== capitals.length - 1 ? ', ' : ''}`, ''))}
                </p>
            </div>
        </div>
}
