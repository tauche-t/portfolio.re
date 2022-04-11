import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from '../../projectData.js';
import { useMatch, useNavigate } from 'react-router-dom';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const projectMatch = useMatch("project/:id");

  console.log(projectMatch);

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const onBoxClick = (projectId) => {
    navigate(`/project/${projectId}`);
  }

  const onOverlayClick = () => {
    navigate('/project');
  }

  const clickdProject = projectMatch?.params.id && projectData.find(project => String(project.id) === projectMatch.params.id);

  console.log(clickdProject)

  return (
    <>
      <div className='container project-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't']} idx={15} />
          </h1>
        </div>
        <div className='project-zone'>
          {projectData.map((n, i) => (
            <motion.div onClick={() => onBoxClick(n.id)} key={n.id} layoutId={n.id}>

            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {clickdProject ? (
          <>
            <motion.div
              onClick={onOverlayClick}
              className='overlay'
              initial={{ background: "rgba(0, 0, 0, 0)" }}
              animate={{ background: "rgba(0, 0, 0, 0.5)" }}
              exit={{ background: "rgba(0, 0, 0, 0)" }}
            ></motion.div>
            <motion.div className='project-content' layoutId={projectMatch.params.id}>
              <h2>{clickdProject.title}</h2>
              <p>{clickdProject.content}</p>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <Loader type="pacman" />
    </>
  );
}

export default Project;
