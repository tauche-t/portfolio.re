import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import Loader from 'react-loaders';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={15} />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
        </div>

        <div className='stage-cube'>
          <div className='cubespinner'>
            <div className='face1'>
              <AiFillHtml5 />
            </div>
            <div className='face2'>
              <DiCss3 />
            </div>
            <div className='face3'>
              <SiJavascript />
            </div>
            <div className='face4'>
              <SiNextdotjs />
            </div>
            <div className='face5'>
              <FaGitAlt />
            </div>
            <div className='face6'>
              <FaReact />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Skills;
