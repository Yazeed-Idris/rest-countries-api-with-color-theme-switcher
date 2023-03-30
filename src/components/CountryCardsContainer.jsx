import {CountryCard} from "./CountryCard.jsx";
import {Fragment, useState} from "react";

export const CountryCardsContainer = ({countries, sliceSize = 8, rowsNumber = 2}) => {
    const SLICE_SIZE = countries.length > sliceSize ? sliceSize : countries.length;
    const [displayedStartIndex, setDisplayedStartIndex] = useState(0);


    function handleUpClick() {
        if (displayedStartIndex === 0) return;
        setDisplayedStartIndex(displayedStartIndex - 1);
    }

    function handleDownClick() {
        if (displayedStartIndex === countries.length - SLICE_SIZE) return;
        setDisplayedStartIndex(displayedStartIndex + 1);
    }

    const displayedCountries = countries.slice(displayedStartIndex, displayedStartIndex + SLICE_SIZE)
    let displayedCountriesComponentsArr = [];
    for (let i = 0; i < rowsNumber; i++) {
        displayedCountriesComponentsArr.push([]);
        for (let j = 0; j < sliceSize / rowsNumber; j++) {
            displayedCountriesComponentsArr[i].push(displayedCountries[i * (sliceSize / rowsNumber) + j])
        }
    }

    // console.log('displayedCountriesComponentsArr:', displayedCountriesComponentsArr)

     const displayedCountriesComponents = displayedCountriesComponentsArr.map((row, index) => {
         console.log('row:', row)
        return <div key={`${index}${row}`} className='flex justify-between'>
            {row.map((countryCard, jIndex) => {
                    if (countryCard === undefined) return <Fragment></Fragment>
                return <CountryCard key={index * (sliceSize / rowsNumber) + jIndex} country={countryCard} index={index * (sliceSize / rowsNumber) + jIndex}/>
            }
            )}
        </div>
    })
    return (
        <Fragment>
            <div className='w-full h-full'>
                {displayedCountriesComponents}
            </div>
            <button onClick={handleUpClick} className=''>Up</button>
            <button onClick={handleDownClick} className=''>Down</button>
        </Fragment>

    )
}
