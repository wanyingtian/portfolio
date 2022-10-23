import LogoS from '../../assets/images/W.png'
import { Link} from 'react-router-dom'
import './index.scss';
const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoS} alt ="developer" />
                anying
                <br />
                biomedical engineer
                </h1>
                <h2>electrical-biomedical engineer, 
                    <br /> data science and machine learning enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home