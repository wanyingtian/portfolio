import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    As a recent graduate from the Electrical-Biomedical Engineering program 
                    at the University of Victoria, I am passionate about developing solutions 
                    to worldwide problems through technology innovation. 
                </p>
                <p>
                    I have experience working in the biotechnology industry and research institutes, 
                    from microneedle development to microfluidics engineering and data analysis. 
                    I also have recent experiences in machine learning research and development 
                    through honours thesis and a capstone project. 
                </p>
                <p>
                    My interest in engineering design and my curiosity in cutting-edge research 
                    such as data science and artificial intelligence motivate me to adapt, experience and learn.
                </p>
            </div>
        </div>
    )
}

export default About