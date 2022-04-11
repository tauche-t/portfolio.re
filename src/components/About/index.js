import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import ProfileImg from '../../assets/images/about-img.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
          1년 동안 퍼블리셔로 일하면서 성장에 대한 갈증을 매일 느꼈습니다.  성장하고 새롭게 배운 경험과 학습을 토대로 서비스를 개선하는 일을 좋아합니다. 퍼블리셔로는 그런 이상을 실현하기에는 한계가 보였고, 나의 성장과 배움을 멈추게 하고 싶지 않아서 성장 방향성이 넓은 개발자로 전향하기로 마음먹었습니다.
          </p>

          <p>
          노력은 책임감에서 나온다고 생각합니다. 나에게 주어진 업무, 내가 해내야 하는 일들은 꼭 해내겠다는 책임감과 일념이 강한 사람은 피곤함을 느끼지 않고 노력할 수 있다고 생각합니다. 퍼블리셔로 재직할 당시 무리한 개발 일정 속에서도 근본적인 개발을 지연시키는 원인을 찾고, 꼭 필요하지 않은 기능들을 기획 측과 협의해서 줄여나가는 등 일정 내 개발을 완수하여 회사에 손해가 발생하는 일을 막은 경험이 있습니다.          
          </p>
        </div>

        <div className="profileImg">
          <img src={ProfileImg} alt={ProfileImg} />
          <span className="subTitle">Frontend Developer</span>
          <div className="profile-text">
            <AnimatedLetters letterClass={letterClass} strArray={['J', 'u', 'n', '-', 'm', 'o']} idx={15} />
          </div>
          <div className='profile-line'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default About;