import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const SearchInput = ({handleChangeText}) => {



    return <div className='flex justify-center items-center bg-White px-9 py-4 w-fit shadow-[0_0_7px_1px_rgba(0,0,0,0.3)] rounded dark:bg-Dark-Blue-dark transition-colors duration-300'>
        <FontAwesomeIcon className='w-5 h-6 object-contain text-Dark-Gray-light-input dark:text-White' icon={faMagnifyingGlass} />
        <input onChange={(e) => handleChangeText(e)} className='ml-7 focus:outline-0 w-full font-Nunito-Sans placeholder-Dark-Gray-light-input dark:bg-Dark-Blue-dark text-Dark-Blue-dark dark:text-White dark:placeholder-White transition-colors duration-300' type="text" autoComplete='off' placeholder={'Search for a country'}/>
    </div>
}
