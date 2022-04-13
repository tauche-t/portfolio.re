import './index.scss';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-j.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['u', 'n', 'm', 'o'];
  const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="delveloper" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2>Frontend Developer / JavaScript Expert / React Developer</h2>
          <a className='flat-button' target="_blank" rel="noreferror" href="https://periodic-cup-8bf.notion.site/JUNMO-9951e7d4bcf8429f9ad435a5c2de3dc3">
            <em></em>
            <span>RESUME</span>
          </a>
        </div>

        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;