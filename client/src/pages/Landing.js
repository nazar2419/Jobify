import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} className='logo' alt="logo" />
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
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  )
}

export default Landing