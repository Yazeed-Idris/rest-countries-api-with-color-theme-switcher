import {Fragment} from 'react'
import {Header} from "./components/Header";
import {BackButton} from "./components/BackButton";
function App() {

  return (
    <Fragment>
        <Header />
        <main className='dark:bg-Very-Dark-Blue-bgDark transition-colors duration-300 grid place-items-center'>
            <BackButton />
        </main>
    </Fragment>
  )
}

export default App
