import {extractShortCountryInfo} from "../country-data.service.js";

export const CountryCard = ({country}) => {
    const [capitals, imageUrl, population, region, countryName] = extractShortCountryInfo(country)

    const numberFormatter = Intl.NumberFormat('en-US');
    return <div className='rounded-md shadow-xl font-Nunito-Sans text-Dark-Blue-dark dark:text-White transition-all duration-300'>
        <div className='w-80 h-52 mb-4'>
            <img className='rounded-t-md w-full h-full object-cover' src={imageUrl} alt={`${countryName} flag`}/>
        </div>
        <h2 className='text-xl font-[600] mt-6 mb-4 ml-6'>{countryName}</h2>
        <div className='mt-0 ml-6 text-sm mb-10'>
            <p className='font-[300] my-1'><strong className='font-[600]'>Population:</strong> {numberFormatter.format(population)}</p>
            <p className='font-[300] my-1'><strong className='font-[600]'>Region:</strong> {region}</p>
            <p className='font-[300] my-1'><strong className='font-[600]'>Capital:</strong> {capitals.reduce((text, capital, currentIndex) => text + `${capital}${currentIndex !== capitals.length - 1 ? ', ' : ''}`, '')}</p>
        </div>
    </div>
}
