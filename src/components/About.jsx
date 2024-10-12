/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        With 2 years of experience as a Full Stack Software Developer and React Native Developer, I bring
        expertise in React.js, React Native, Redux, Next.js, Node.js, Express.js, AWS, MySQL, MongoDB,
        JavaScript, Html5, CSS, Bootstrap and Mui to the table. I am on the lookout for an exciting and
        challenging role with a renowned IT organization, where I can not only contribute to the company&apos;s
        growth but also continue my journey of exploration and learning. My proficiency extends to Git, GitHub
        and Docker. Let&apos;s embark on this exciting tech adventure together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10' >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")