import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>We are a dedicated real estate agency committed to helping individuals and 
  families find the perfect place to call home. Over the years, we have built 
  a strong reputation for providing transparent services, personalized guidance, 
  and trusted property solutions.</p>
            <p>Our team works closely with clients to understand their needs—whether it's 
  buying, selling, renting, or investing. With a deep understanding of market 
  trends, we ensure that every customer receives the best value and a smooth, 
  stress-free experience.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About