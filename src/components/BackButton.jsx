import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }
    return <button onClick={handleClick} className='active:translate-y-1 transition-all duration-100 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] flex justify-center items-center px-7 py-2 font-[600] bg-White text-Very-Dark-Blue-light-text dark:bg-Dark-Blue-dark dark:text-White'>
        <FontAwesomeIcon className='object-fill w-4 h-4 scale-x-125 duration-300' icon={faArrowLeft} />
        <span className='ml-3 duration-300'>
        Back
        </span>
    </button>
}
