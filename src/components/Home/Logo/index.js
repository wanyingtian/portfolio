import './index.scss'
import LogoS from '../../../assets/images/W.png'
import {useEffect, useRef} from 'react' 
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
            duration: 1,
            opacity: 1,
            })
            .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 5,
            })
            gsap.fromTo(
                solidLogoRef.current,
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                  delay: 4,
                  duration: 4,
                }
              )

 
    },[])

    return (
        <div className = "logo-container" ref={bgRef}>
            <img className='solid-logo' 
            ref={solidLogoRef}
            src = {LogoS} 
            alt ="S" />
            <svg 
                width="1272" 
                height="1943" 
                version = '1.0'  
                viewBox='0 0 1272 1943'
                xmlns="http://www.w3.org/2000/svg" 
                xlink="http://www.w3.org/1999/xlink" 
                space="preserve" 
                overflow="hidden"
            >
            


                <g 
                    className='svg-container' 
                    clip-path="url(#clip0)" 
                    transform="translate(-355 -266)"
                    fill="none"
                >
                    
                    <path 
                        ref={outlineLogoRef}
                        d="
                        M434.733 734.014 747.361 734.014 747.361 1417.79C747.361 1451.67 750.056 1474 755.446 1484.78 760.836 1495.56 771.745 1500.95 788.172 1500.95 818.973 1500.95 834.373 1475.03 834.373 1423.18L834.373 734.014 1147 734.014 1147 1417.79C1147 1450.65 1149.82 1472.72 1155.47 1484.01 1161.12 1495.31 1172.15 1500.95 1188.58 1500.95 1219.38 1500.95 1234.78 1473.23 1234.78 1417.79L1234.78 734.014 1547.41 734.014 1547.41 1490.94C1547.41 1585.4 1518.92 1662.4 1461.94 1721.95 1404.96 1781.5 1331.29 1811.27 1240.94 1811.27 1132.11 1811.27 1048.95 1761.73 991.457 1662.66 956.036 1716.05 918.048 1754.16 877.494 1777 836.94 1799.85 786.888 1811.27 727.34 1811.27 632.885 1811.27 560.503 1781.5 510.195 1721.95 459.887 1662.4 434.733 1576.67 434.733 1464.76Z" 
                    />
                    
                </g>
            </svg>

        </div>
    )
}

export default Logo
