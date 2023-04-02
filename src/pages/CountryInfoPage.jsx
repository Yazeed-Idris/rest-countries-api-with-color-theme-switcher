import {Fragment} from "react";
import {CountryInfo} from "../components/CountryInfo";

export default function CountryInfoPage({countriesData}) {
    return <Fragment>
        <CountryInfo country={countriesData[0]}/>
    </Fragment>
}
