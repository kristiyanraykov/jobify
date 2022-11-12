import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt porttitor massa semper porttitor. Pellentesque imperdiet
            purus eros, eu consectetur lorem blandit id. Cras vel luctus nibh.
            Maecenas vestibulum quis lorem ac eleifend. Integer vel purus nec
            lacus ultrices congue. Suspendisse suscipit arcu in tellus maximus,
            sit amet laoreet velit.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hubt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
