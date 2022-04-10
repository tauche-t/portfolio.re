import './index.scss';
import LogoJ from '../../../assets/images/logo-j.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20,
    })

    gsap.fromTo(solidLogoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      delay: 4,
      duration: 2,
    })
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoJ} alt="J" />
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="559.000000pt" height="897.000000pt" 
        viewBox="0 0 559.000000 897.000000"
      >
        <g 
          className="svg-container"
          transform="translate(0 897) scale(0.1,-0.1)"
          fill="none">
          <path ref={outlineLogoRef} d="M3407 5518 c-3 -2770 -4 -2970 -20 -3071 -67 -412 -224 -611 -540
        -687 -100 -24 -141 -25 -226 -4 -262 64 -447 242 -540 519 -64 195 -81 381
        -81 918 l0 427 -968 -2 -967 -3 1 -515 c1 -404 5 -548 18 -670 80 -742 381
        -1300 886 -1640 294 -198 630 -315 1081 -376 156 -21 913 -31 1144 -15 311 22
        558 68 805 150 365 122 638 286 881 531 354 358 558 839 608 1433 8 88 11
        1051 11 3048 l0 2919 -1045 0 -1045 0 -3 -2962z m450 -50 c-3 -2722 -4 -2920
        -20 -3021 -67 -412 -224 -612 -540 -687 -67 -16 -237 -41 -237 -35 0 1 28 19
        62 41 197 121 306 325 365 684 16 97 18 318 20 3018 l3 2912 175 0 175 0 -3
        -2912z m1090 -35 c-3 -2751 -4 -2956 -20 -3063 -67 -438 -197 -764 -418 -1050
        -347 -448 -891 -726 -1579 -805 -169 -19 -261 -19 -424 0 -400 47 -739 165
        -1031 358 -162 108 -368 313 -474 472 -185 279 -301 599 -357 990 -14 98 -18
        215 -21 648 l-4 527 414 0 415 0 5 -442 c5 -474 10 -544 63 -746 99 -381 317
        -595 684 -673 96 -20 137 -23 465 -25 390 -3 507 4 658 41 395 97 575 360 627
        920 6 71 10 1106 10 2953 l0 2842 495 0 495 0 -3 -2947z m450 0 c-3 -3227 1
        -2987 -58 -3278 -95 -462 -356 -891 -709 -1167 -250 -194 -596 -350 -938 -422
        -160 -34 -177 -32 -67 8 321 117 582 281 806 506 354 358 558 839 608 1433 8
        88 11 1037 11 2998 l0 2869 175 0 175 0 -3 -2947z m-4884 -2390 c4 -331 11
        -523 22 -623 100 -915 530 -1532 1280 -1837 139 -57 131 -59 -63 -16 -254 55
        -512 164 -727 306 -162 108 -368 313 -474 472 -185 279 -300 599 -357 990 -14
        99 -18 215 -21 653 l-4 532 169 0 169 0 6 -477z m1390 30 c5 -480 10 -548 63
        -751 66 -255 184 -430 370 -552 l79 -52 -50 7 c-122 15 -194 29 -249 47 -338
        111 -510 384 -555 878 -6 63 -11 285 -11 493 l0 377 174 0 174 0 5 -447z"/>
        </g>
      </svg>
    </div>
  );
}

export default Logo;
