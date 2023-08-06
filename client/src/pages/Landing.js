import main from '../assets/images/main(1).svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Your ultimate job tracking solution for efficient career management.
            Easily record and monitor job applications, receive real-time
            updates, and stay organized. Discover new opportunities, ensure data
            security, and gain valuable insights. Join today to streamline your
            job search and unlock the path to your dream career!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
