import {extractFullCountryInfo} from "../country-data.service.js";

export const CountryInfo = ({country}) => {
    if (!country) return <div>Loading...</div>
    const numberFormatter = Intl.NumberFormat('en-US');
    const [capitals, imageUrl, population, region, countryName, nativeName, subRegion, topLevelDomain, currencies, languages, borderCountries] = extractFullCountryInfo(country)

    return <section className='xl:flex justify-between w-full items-center font-Nunito-Sans text-Dark-Blue-dark dark:text-White transition-all duration-300'>
        <img className='w-[39rem] h-[26rem] object-cover' src={imageUrl} alt={`${countryName} flag`}/>
        <div>
            <h1>{countryName}</h1>
            <section id='information-section' className=''>
                <div className='xl:flex justify-between w-full'>
                   <div>
                          <p className='font-[300] my-1'><strong className='font-[600]'>Native Name:</strong> {nativeName}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Population:</strong> {numberFormatter.format(population)}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Region:</strong> {region}</p>
                          <p className='font-[300] my-1'><strong className='font-[600]'>Sub Region:</strong> {subRegion}</p>
                       <p className='font-[300] my-1'><strong className='font-[600]'>Capital:</strong> {capitals.reduce((text, capital, currentIndex) => text + `${capital}${currentIndex !== capitals.length - 1 ? ', ' : ''}`, '')}</p>
                   </div>
                    <div>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Top Level Domain:</strong> {topLevelDomain}</p>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Currencies:</strong> {currencies}</p>
                        <p className='font-[300] my-1'><strong className='font-[600]'>Languages:</strong> {languages}</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
}
