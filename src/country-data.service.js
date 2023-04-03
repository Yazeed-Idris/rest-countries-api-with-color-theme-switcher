import {useEffect, useState} from "react";

const useCountriesData = () => {

    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((countriesData) => {
                setCountriesData(countriesData.map((country, index) => {
                   return {
                       ...country,
                       countryIndex: index
                   }
                }));
            });
    }, [])
    return countriesData;
}

export function shortenCountryName(countryName) {
    const MAX_COUNTRY_NAME_LENGTH = 19;
    return countryName.length > MAX_COUNTRY_NAME_LENGTH ? countryName.slice(0, MAX_COUNTRY_NAME_LENGTH) + '...' : countryName;
}

export function extractShortCountryInfo(country) {
    const capitals = country['capital'] ?? ['unknown'];
    const imageUrl = country['flags']['svg'] ?? (country['flags']['png'] ?? '');
    const population = country['population'] ?? 0;
    const region = country['region'];
    const countryName = shortenCountryName(country['name']['common']  ?? 'unknown');

    return [capitals, imageUrl, population, region, countryName]
}

export function getCountryBorders(country, countriesData) {
    const countryBorders = country['borders'] ?? [];
    const borderCountries = [];
    for (const countryBorder of countryBorders) {
        const countryBorderName = countriesData.find(country => country['cca3'] === countryBorder);
        borderCountries.push(countryBorderName);
    }
    return borderCountries;
}

export function extractFullCountryInfo(country) {
    const NATIVE_NAME_COUNTER_LIMIT = 3;
    const [capitals, imageUrl, population, region, _] = extractShortCountryInfo(country);
    const countryName = country['name']['common']  ?? 'unknown';
    let nativeName = ''
    let counter = 0;
    for (const nativeNameKey in country['name']['nativeName']) {
        if (counter === NATIVE_NAME_COUNTER_LIMIT) {
            break;
        }
        const nativeNameValue = country['name']['nativeName'][nativeNameKey]['official'] ?? country['name']['nativeName'][nativeNameKey]['common']?? 'unknown';
        nativeName += nativeNameValue + ', '
        counter++;
    }
    if (country['name']['nativeName'] === undefined) {
        nativeName = 'unknown'
    } else {
    country['name']['nativeName'].length <= 0 ? nativeName = 'unknown' : nativeName = nativeName.slice(0, -2);
    }

    const subRegion = country['subregion'] ?? 'unknown';
    let topLevelDomain;
    if (country['tld'] === undefined) {
       topLevelDomain = 'unknown';
    } else {
    topLevelDomain = country['tld'].reduce((acc, tld, index) => acc + tld + (index === country['tld'].length - 1 ? '' : ', '), '');
    }
    let currencies = ''
    for (const key in country['currencies']) {
        currencies += country['currencies'][key]['name'] + ', '
    }
    currencies = currencies.slice(0, -2);
   let languages = ''
    for (const key in country['languages']) {
        languages += country['languages'][key] + ', '
    }
    languages = languages.slice(0, -2);

    return [capitals, imageUrl, population, region, countryName, nativeName, subRegion, topLevelDomain, currencies, languages]
}
export default useCountriesData;
