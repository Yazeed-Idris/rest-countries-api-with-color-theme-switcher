import {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faV} from "@fortawesome/free-solid-svg-icons";

export const RegionFilterList = ({setFilterOption}) => {

    const [buttonText, setButtonText] = useState('Filter by region');
    const [showList, setShowList] = useState(false);
    const regions = [
        'Africa',
        'Americas',
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
            setFilterOption('Clear');
            return;
        }
        setButtonText(regionName);
        setFilterOption(regionName);
    }

    return <Fragment>
        <div className='z-50'>
            <button onClick={handleDropdownClick} className='flex w-48 justify-between px-6 py-4 items-center shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] rounded-lg text-Very-Dark-Blue-light-text bg-White dark:text-White dark:bg-Dark-Blue-dark transition-all duration-300'>{buttonText}
                <FontAwesomeIcon className={`w-2 h-3 object-contain scale-x-[1.8] ml-7 ${showList? 'scale-[-1]': ''} transition-transform duration-100`} icon={faV} />
            </button>
            <div className='relative w-full h-0 z-50'>
                <div className={`absolute z-50 py-3 w-full shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] mt-2 rounded-lg text-Very-Dark-Blue bg-White dark:text-White dark:bg-Dark-Blue-dark transition-all duration-300 origin-top ${showList? 'scale-100' : 'scale-0'}`}>
                    {regions.map((el, index) => {
                        return <p onClick={() => {handleOptionClick(el)}} className={`mt-1 mb-1 px-6 cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-White dark:hover:bg-opacity-5 `} key={index}>{el}</p>
                    })}
                    <p onClick={() => handleOptionClick('Clear')} className={`mt-1 mb-1 px-6 cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-White dark:hover:bg-opacity-5 `}>Clear</p>
                </div>
            </div>
        </div>

    </Fragment>

}
