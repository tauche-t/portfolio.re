import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoJ from '../../assets/images/logo-j.png';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { FiTool } from 'react-icons/fi';
import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiBloglovin } from 'react-icons/si';
import { BsPerson } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoJ} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <AiOutlineHome />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <BsPerson />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FiTool />
        </NavLink>
        <NavLink activeclassname="active" className="project-link" to="/project">
          <AiOutlineFundProjectionScreen />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <AiOutlineMail />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferror" href="#">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferror" href="#">
            <SiBloglovin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;