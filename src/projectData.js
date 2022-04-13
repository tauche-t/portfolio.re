import HummingImg from './assets/images/humming-bird-img.PNG';
import TodayILearnd from './assets/images/today-i-learned-main.PNG';
import JunflixImg from './assets/images/junflix-img.PNG';
import Visang from './assets/images/visang.PNG';

export const projectData = [
  {
    id: "1",
    title: 'Today-i-learned',
    content: '사람들이 서로 어떤 공부를 하는지, 공부한 내용을 공유하는 Today-i-learned 웹사이트입니다. todolist형태로 오늘 할 공부와 오늘 한 공부에 대한 후기를 작성할 수 있도록 했습니다. next로 SSR이 가능하도록 만들었고, multer를 통해 이미지 업로드가 가능하며 AWS에 배포하여 사람들과 공부한 내용을 공유 가능하도록 만들었습니다.',
    url: 'http://hummingbird.kr/',
    github: 'https://github.com/tauche-t/Today-i-learned',
    skills: ['React(Next.js)', 'Redux', 'Redux-saga', 'Node.js', 'Express.js', 'AWS ES2', 'Pm2', 'AWS Lambda'],
    imgSrc: TodayILearnd,
  },
  {
    id: "2",
    title: 'Humming Brid',
    content: 'React와 Redux, Redux-saga를 통해 간단한 회원가입 및 로그인, 게시글 작성, 삭제 기능이 들어간 웹/앱입니다. 백엔드 API가 없다는 가정하에 LocalStorage로 작업하였고, Faker라이브러리를 통해 더미데이터를 생성한 뒤 무한 스크롤링 기능을 입혔습니다.',
    url: 'https://humming-bird.netlify.app/',
    github: 'https://github.com/tauche-t/Humming-bird.re',
    skills: ['React', 'Redux', 'Redux-saga', 'Faker.js', 'Localstorage'],
    imgSrc: HummingImg,
  },
  {
    id: "3",
    title: 'Junflix',
    content: '넷플릭스 사이트를 클론하여 만든 웹 사이트입니다. 영화api를 연동하여 현재 방영, 인기순위, 개봉예정등 영화와 tvShow 프로그램에 대한 정보를 가져온 뒤 화면에 나타내었고, motion framer 라이브러리를 이용해 인터렉션을 강조하였습니다. 상태관리는 사용하기 간편하고 비교적 가벼운 Recoil을 사용하였습니다.',
    url: 'https://tauche-t.github.io/junflix/',
    github: 'https://github.com/tauche-t/junflix',
    skills: ['React', 'Typescript', 'Recoil', 'FramerMotion'],
    imgSrc: JunflixImg,
  },
  {
    id: "4",
    title: '비상 차시창',
    content: '아이들의 교육 학습을 도울 컨텐츠를 HTML과 JavaScript로 드래그 앤 드롭, 랜덤 퀴즈 등을 개발했던 프로젝트 입니다.',
    url: 'http://server.laypop.co.kr/visang/science.html',
    github: '',
    skills: ['Html', 'Css', 'Javascript', 'JQuery'],
    imgSrc: Visang,
  },
];