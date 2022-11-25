import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className='info'>
          {/* info */}
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Inventore, labore. Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. Doloribus dolorum similique accusamus, 
            explicabo tempore nulla minus fugiat quae esse iste.
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing