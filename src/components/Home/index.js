import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/W.png'
import Logo from './Logo'

import './index.scss'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','n','y','i','n','g']
    const jobArray = [
        'b',
        'i',
        'o',
        'm',
        'e',
        'd',
        'i',
        'c',
        'a',
        'l',
        ' ',

        'e',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
        '.',
    ]


    useEffect(() => {
        return () =>setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    },[]); 

    return (
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>   
                <br /> 
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}> 'm
                </span>  
                <img src={LogoS} alt ="developer" />
                <AnimatedLetters letterClass= {letterClass}
                strArray = {nameArray}
                idx = {15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray = {jobArray}
                idx = {16}/>
                </h1>
                <h2>Data Science & Machine Learning Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            

        </div>
    );




}

export default Home