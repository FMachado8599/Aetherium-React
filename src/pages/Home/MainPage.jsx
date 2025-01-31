import Hero from './sections/Hero/Hero';
import Process from './sections/Process/Process';
import Benefits from './sections/Benefits/Benefits';
import Opinions from './sections/Opinions/Opinions';

const MainPage = () => {
  return (
    <main className='main-home'>
        <Hero />
        <Process />
        <Benefits />
        <Opinions />        
    </main>
  )
}

export default MainPage
