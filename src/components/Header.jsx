import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon as faMoonRegular} from "@fortawesome/free-regular-svg-icons";
import {faMoon as faMoonSolid} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState}  from 'react'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [darkMode])

    function handleSetDarkMode() {
        localStorage.theme = darkMode? 'light' : 'dark'
        setDarkMode(!darkMode);
    }

    return (<header className='flex justify-between items-center px-10 sm:px-20 py-7 w-full text-Very-Dark-Blue-light-text shadow-lg z-50 bg-White bg-opacity-100 dark:bg-Dark-Blue-dark transition-colors duration-300'>
        <h2 className='text-lg sm:text-3xl font-[800] dark:text-White duration-500 '>Where in the world?</h2>
        <div onClick={handleSetDarkMode} className='flex items-center cursor-pointer '>
            <FontAwesomeIcon  className='object-fill w-3 h-4 sm:w-5 sm:h-6  dark:text-White select-none transition-all duration-500' icon={darkMode? faMoonSolid : faMoonRegular} />
            <h3 className='font-[600] duration-500 ml-2 text-center dark:text-White text-sm sm:text-xl'>Dark Mode</h3>
        </div>
    </header>)
}
