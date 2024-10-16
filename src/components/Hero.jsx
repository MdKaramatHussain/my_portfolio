import { motion } from 'framer-motion'
import { styles } from '../style'
import ComputerCanvas from './canvas/Computers'
import { isWebGL2Available } from '@react-three/drei'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className='text-[#915eff]'>Karamat</span>  </h1>
          <p>I can develop web Application,<br className='sm:block hidden' /> mobile application and ios application</p>
        </div>
      </div>
      {isWebGL2Available ? <ComputerCanvas /> : null}
      <div className='absolute xs:bottom-[-5px] bottom-32 w-full flex justify-center items-center' >
        <a href='#about' >
          <div className='w-[30px] h-[61px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              // <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-[1.2vh] h-[1.2vh] rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero