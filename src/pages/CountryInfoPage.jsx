import {CountryInfo} from "../components/CountryInfo";
import {useParams} from "react-router-dom";
import {BackButton} from "../components/BackButton";

export default function CountryInfoPage({countriesData}) {

    const {index} = useParams();

    return <div className='flex flex-col justify-start h-full w-full'>
        <div className='xl:flex justify-start items-center w-full my-20'>
            <BackButton />
        </div>
        <CountryInfo country={countriesData[index]} countriesData={countriesData}/>
    </div>
}
