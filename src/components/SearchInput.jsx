import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const SearchInput = () => {
    return <div className='flex justify-center items-center bg-White px-9 py-4 w-fit shadow-[0_0_7px_1px_rgba(0,0,0,0.3)] rounded text-Dark-Gray-light-input'>
        <FontAwesomeIcon className='w-5 h-6 object-contain text-Dark-Gray-light-input' icon={faMagnifyingGlass} />
        <input className='ml-7 focus:outline-0 w-full font-Nunito-Sans ' type="text" autoComplete='off' placeholder={'Search for a country'}/>
    </div>
}
