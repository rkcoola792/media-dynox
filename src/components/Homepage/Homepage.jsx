import React, { useEffect, useState, useRef } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import "./homepage.scss"
import { motion,  useScroll, useSpring ,useInView,useAnimation,} from "framer-motion";
const Homepage = () => {
  const [cursorXaxis, setCursorXasix] = useState();
  const [cursorYaxis, setCursorYasix] = useState();

  useEffect(()=>{

    document.addEventListener('mousemove',(e)=>{
    setCursorXasix(e?.pageX)
    setCursorYasix(e?.pageY)
    
      })
  },[])

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="Homepage scroll-smooth">
      <div
        className=" hidden cursor sm:flex justify-center items-center" 
        style={{ 
          left: cursorXaxis+10 + "px", top: cursorYaxis+10 + "px" }}
      ><div className='dot'></div></div>
      <Section1></Section1>
      <motion.div
        initial={{ opacity: 0, y: 95 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section2></Section2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section3></Section3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section4></Section4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section5></Section5>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section6></Section6>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section7></Section7>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section8></Section8>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section9></Section9>
      </motion.div>
    </div>
  );
}

export default Homepage
