import React from 'react'
// import { Link } from 'react-router-dom';
import BoxOne from '../../HomeBoxes/BoxOne/BoxOne';
import BoxTwo from '../../HomeBoxes/BoxTwo/BoxTwo';
import BoxThree from '../../HomeBoxes/BoxThree/BoxThree';
import BoxFour from '../../HomeBoxes/BoxFour/BoxFour';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        {/* <div>
            <Link to="/registro">
                <button>Registrarse</button>
            </Link>
            <Link to="/inicio">
                <button>Login</button>
            </Link>        
        </div> */}
        <div>
            <BoxOne></BoxOne>
            <BoxTwo></BoxTwo>
            <BoxThree></BoxThree>
            <BoxFour></BoxFour>
        </div>
    </div>
  )
}

export default Home