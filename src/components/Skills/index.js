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
          <div className="skills-zone">
            <h2>Front-end Skill</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>ReduxSaga</li>
              <li>Recoil</li>
              <li>JQuery</li>
            </ul>
          </div>
          <div className="skills-zone">
            <h2>Back-end Skill</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skills-zone">
            <h2>Tool</h2>
            <ul>
              <li>Git/GitHub</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
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
