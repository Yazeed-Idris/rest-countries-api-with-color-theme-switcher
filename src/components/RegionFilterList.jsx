import {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faV} from "@fortawesome/free-solid-svg-icons";

export const RegionFilterList = () => {

    const [buttonText, setButtonText] = useState('Filter by region');
    const [showList, setShowList] = useState(false);
    const regions = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania',
    ]

    function handleDropdownClick() {
        setShowList(!showList);
    }

    function handleOptionClick(regionName) {
        setShowList(false);
        if (!(regions.includes(regionName))) {
            setButtonText('Filter by region');
            return;
        }
        setButtonText(regionName);
    }

    return <Fragment>
        <div>
            <button onClick={handleDropdownClick} className='flex w-48 justify-between px-6 py-4 items-center shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] rounded-lg text-Very-Dark-Blue-light-text bg-White dark:text-White dark:bg-Dark-Blue-dark'>{buttonText}
                <FontAwesomeIcon className={`w-2 h-3 object-contain scale-x-[1.8] ml-7 ${showList? 'scale-[-1]': ''} transition-all duration-100`} icon={faV} />
            </button>
            <div className='relative w-full h-0'>
                <div className={`absolute py-3 w-full shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] mt-2 rounded-lg text-Very-Dark-Blue bg-White dark:text-White dark:bg-Dark-Blue-dark transition-all duration-100 origin-top ${showList? 'scale-100' : 'scale-0'}`}>
                    {regions.map((el, index) => {
                        return <p onClick={() => {handleOptionClick(el)}} className={`mt-1 mb-1 px-6 cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-White dark:hover:bg-opacity-5 `} key={index}>{el}</p>
                    })}
                    <p onClick={() => handleOptionClick('clear')} className={`mt-1 mb-1 px-6 cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-White dark:hover:bg-opacity-5 `}>Clear</p>
                </div>
            </div>
        </div>

    </Fragment>

}
