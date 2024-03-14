import React, { useEffect, useRef } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import { motion,  useScroll, useSpring ,useInView,useAnimation,} from "framer-motion";
const Homepage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });

    const ref=useRef(null)
    const isInView=useInView(ref)
    const mainControls=useAnimation()
    useEffect(()=>{
      if(isInView){
        mainControls.start("visible")
      }
    },[isInView])
  return (
    <div className="Homepage scroll-smooth">
      <Section1></Section1>
      <motion.div
      ref={ref}
      variants={{
        hidden:{opacity:0 ,y:75},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.5,delay:0.25}}
      >
        <Section2></Section2>
      </motion.div>

      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Section9></Section9>
    </div>
  );
}

export default Homepage
