import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import ProfileImg from '../../assets/images/about-img.png';

const blogPosts = [
  {
    id: 1,
    skill: 'Node.js',
    title: '서버 구동',
    content: '노드는 자바스크립트 런타임입니다. 노드를 통해 자바스크립트로 ...',
    src: 'https://velog.io/@keyjinnam/Node.js-%EC%84%9C%EB%B2%84-%EA%B5%AC%EB%8F%99',
  },
  {
    id: 2,
    skill: 'Next.js',
    title: 'Redux',
    content: 'Next에서 Redux를 붙이려면 꽤나 복잡한 과정을 거쳐야 합니다. 이 복잡한 ...',
    src: 'https://velog.io/@keyjinnam/Next.js-Redux',
  },
  {
    id: 3,
    skill: 'React',
    title: ' 커스텀 훅',
    content: '회원가입 폼이나 로그인 폼을 작성할 때 중복이 되는 부분을 hook을 통해 커스텀 ...',
    src: 'https://velog.io/@keyjinnam/React-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85',
  }
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            공부하고 경험한 것들을 기록하고 공유하는 것을 좋아합니다.
            <br />
            개발을 하면서 꼭 했던 방식이 아닌 다른 방식, 다양한 시도를 통해  트렌드에 맞게 계속해서 공부해 나가며, 
            <br />
            성장을 위한 공부를 많이 좋아합니다.
            <br />
            프론트 영역뿐만 아니라 백엔드 분야까지 관심을 두고
            <br />
            시너지를 낼 수 있는 동료들과 함께 공부하는 것을 지향하고 선한 영향력을 가진 풀스택
            <br />
            개발자가 되는 것이 저의 목표입니다.
          </p>

          <div class="blog-zone">
            <h2>
              <AnimatedLetters letterClass={letterClass} strArray={['R', 'e', 'c', 'e', 'n', 't', ' ', 'p', 'o', 's', 't']} idx={22} />
            </h2>

            <ul className="blog-post">
              {blogPosts.map((b, i) => (
                <a href={b.src} target="_blank" rel="noreferror">
                  <li key={b.id}>
                    <h3>{b.skill}</h3>
                    <h4>{b.title}</h4>
                    <p>{b.content}</p>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

        <div className="profileImg">
          <img src={ProfileImg} alt={ProfileImg} />
          <span className="subTitle">Frontend Developer</span>
          <div className="profile-text">
            <AnimatedLetters letterClass={letterClass} strArray={['J', 'u', 'n', '-', 'm', 'o']} idx={22} />
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