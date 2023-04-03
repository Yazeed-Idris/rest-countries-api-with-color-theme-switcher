import {CountryCard} from "./CountryCard.jsx";
import {Fragment, useState} from "react";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CountryCardsContainer = ({countries, sliceSize = 8, rowsNumber = 2}) => {
    const SLICE_SIZE = countries.length > sliceSize ? sliceSize : countries.length;
    const [displayedStartIndex, setDisplayedStartIndex] = useState(0);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);


    function handlePreviousClick() {
        if (displayedStartIndex === 0) {
            setPreviousButtonDisabled(true)
            return;
        }
        setNextButtonDisabled(false)
        setDisplayedStartIndex(displayedStartIndex - 1);
    }

    function handleNextClick() {
        if (displayedStartIndex === countries.length - SLICE_SIZE) {
            setNextButtonDisabled(true)
            return;
        }
        setPreviousButtonDisabled(false)
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

    const displayedCountriesComponents = displayedCountriesComponentsArr.map((row, index) => {
        return <div key={`${index}${row}`} className='xl:flex xl:justify-between w-full xl:mt-5'>
            {row.map((countryCard, jIndex) => {
                    if (countryCard === undefined) return <Fragment></Fragment>
                    return <CountryCard key={index * (sliceSize / rowsNumber) + jIndex} country={countryCard}
                                        index={countryCard.countryIndex}/>
                }
            )}
        </div>
    })
    return (
        <Fragment>
            <div className='w-full h-full flex flex-col xl:flex-row justify-between items-center'>
                <button disabled={previousButtonDisabled} onClick={handlePreviousClick}
                        className='active:scale-105 dark:active:scale-105 disabled:hover:scale-100 dark:hover:scale-100 disabled:opacity-50 dark:disabled:opacity-50 transition-all duration-100 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] flex justify-center items-center p-2 font-[600] bg-White text-Very-Dark-Blue-light-text dark:bg-Dark-Blue-dark dark:text-White xl:mr-6 mb-5 rotate-90 xl:rotate-0 '>
                    <FontAwesomeIcon icon={faArrowLeft}/></button>
                <div className='w-full'>

                    {displayedCountriesComponents}
                </div>
                <button disabled={nextButtonDisabled} onClick={handleNextClick}
                        className='active:scale-105 dark:active:scale-105 disabled:hover:scale-100 dark:hover:scale-100 disabled:opacity-50 dark:disabled:opacity-50 transition-all duration-100 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] flex justify-center items-center p-2 font-[600] bg-White text-Very-Dark-Blue-light-text dark:bg-Dark-Blue-dark dark:text-White xl:ml-6 rotate-90 xl:rotate-0'>
                    <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </Fragment>

    )
}
