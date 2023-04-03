import {extractFullCountryInfo, getCountryBorders} from "../country-data.service.js";
import {useNavigate} from "react-router-dom";

export const CountryInfo = ({country, countriesData}) => {
    if (!country) return <div>Loading...</div>
    const numberFormatter = Intl.NumberFormat('en-US');
    const [capitals, imageUrl, population, region, countryName, nativeName, subRegion, topLevelDomain, currencies, languages] = extractFullCountryInfo(country)
    const borderCountries = getCountryBorders(country, countriesData)

    const navigate = useNavigate();

    return <section className='xl:flex justify-start items-center w-full font-Nunito-Sans text-Dark-Blue-dark dark:text-White transition-all duration-300'>
        <img className='w-[39rem] h-[26rem] object-cover' src={imageUrl} alt={`${countryName} flag`}/>
        <div className='mr-0 xl:ml-24'>
            <h1>{countryName}</h1>
            <section id='information-section' className=''>
                <div className='xl:flex'>
                   <div>
                          <p className='font-[300] my-1'><strong className='font-[600]'>Native Name:</strong> {nativeName}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Population:</strong> {numberFormatter.format(population)}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Region:</strong> {region}</p>
                          <p className='font-[300] my-1'><strong className='font-[600]'>Sub Region:</strong> {subRegion}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Capital:</strong> {capitals.reduce((text, capital, currentIndex) => text + `${capital}${currentIndex !== capitals.length - 1 ? ', ' : ''}`, '')}</p>
                   </div>
                    <div className='xl:ml-24'>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Top Level Domain:</strong> {topLevelDomain}</p>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Currencies:</strong> {currencies}</p>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Languages:</strong> {languages}</p>
                    </div>
                </div>
            </section>
            <section id='border-countries-section' className='xl:flex justify-start items-center flex-wrap'>
                <h2 className='font-[600] my-1'>Border Countries:</h2>
                <div className='flex justify-between items-center xl:ml-2 p-0 flex-wrap xl:flex-nowrap'>
                    {borderCountries.map((country) => {
                        return <button onClick={() => navigate(`/country/${country.countryIndex}`)} key={country.countryIndex} className={`font-[300] grow m-2 active:scale-105 dark:active:scale-105 disabled:hover:scale-100 dark:hover:scale-100 disabled:opacity-50 dark:disabled:opacity-50 transition-all duration-100 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] flex justify-center items-center p-2 font-[600] bg-White text-Very-Dark-Blue-light-text dark:bg-Dark-Blue-dark dark:text-White`}>{country['name']['common']  ?? 'unknown'}</button>
                    })}
                </div>

            </section>
        </div>
    </section>
}
