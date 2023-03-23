import {Fragment} from 'react'
import {Header} from "./components/Header";
import {RegionFilterList} from "./components/RegionFilterList";
function App() {

  return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark bg-Very-Light-Gray-bgLight transition-colors duration-300 grid place-items-center'>
            <RegionFilterList />
        </main>
    </Fragment>
  )
}

export default App
