import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon as faMoonRegular} from "@fortawesome/free-regular-svg-icons";
import {faMoon as faMoonSolid} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState}  from 'react'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [darkMode])

    function handleSetDarkMode() {
        setDarkMode((prevState) => !prevState);
        localStorage.theme = darkMode? 'dark' : 'light'
    }

    return (<header className='flex justify-between items-center px-20 py-7 w-full shadow-lg bg-White dark:bg-Dark-Blue-dark transition-colors duration-300'>
        <h2 className='text-2xl font-[800]'>Where in the world?</h2>
        <div className='flex items-center'>
            <FontAwesomeIcon onClick={handleSetDarkMode} className='object-fill w-5 h-6 cursor-pointer dark:text-White select-none' icon={darkMode? faMoonRegular : faMoonSolid} />
            <h3 className='text-xl text-center ml-3'>Dark Mode</h3>
        </div>
    </header>)
}
