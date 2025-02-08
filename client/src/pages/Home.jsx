import React from 'react'
import HomeSlider from '../components/HomeSlider'
import NavbarHome from '../components/NavbarHome'
import HomeCrockery from '../components/HomeCrockery'
import HomeToys from '../components/HomeToys'

function Home() {
    return (
        <div>
            <NavbarHome />
            <HomeSlider />
           <HomeCrockery/>
           <HomeToys/>
        </div>
    )
}

export default Home