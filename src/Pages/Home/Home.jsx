

import Amr from '../../Components/Amr/Amr'
import HeroHome from '../../Components/HeroHome/HeroHome'
import StartLearn from '../../Components/StartLearn/StartLearn'
import WhyUs from '../../Components/WhyUs/WhyUs'
import './home.css'



const Home = () => {



    return (
        <div className="home">
            <HeroHome/>
            <Amr/>
            <WhyUs/>
            <StartLearn/>
        </div>
    )
}

export default Home





