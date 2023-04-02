import {SearchInput} from "../components/SearchInput.jsx";
import {RegionFilterList} from "../components/RegionFilterList.jsx";
import {CountryCardsContainer} from "../components/CountryCardsContainer.jsx";

export default function MainPage({countriesData}) {
    return (
        <div className='flex flex-col w-full h-full justify-start'>
            <div className='xl:flex justify-between items-center w-full mt-10 mb-5 '>
                <SearchInput />
                <div className='mb-5 xl:mb-0'>

                </div>
                <RegionFilterList />
            </div>
            <CountryCardsContainer countries={countriesData}/>
        </div>
    )
}
