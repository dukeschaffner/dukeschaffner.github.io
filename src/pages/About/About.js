import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import bg from '../../images/background.gif'
import './About.css'
import portrait from '../../images/portrait.JPG'
import bg2 from '../../images/bg2.png'

const About = () => {
  return (
    <>
        <Image src={bg} className="bggif"/>
        <Container id='bio'>
          <Image src={portrait} className='portrait'/>
          <div id='bio-text'>
            <h3>
              Bio
            </h3>
            <p>
              Hey there! My name is Duke Schaffner and I am an Oklahoma native with a die hard passion for all things 
              computers and electronics. The seed for this passion was planted when as a freshman mechanical engineering 
              student at the University of Tulsa, I took a computer applications programming class and fell in love with
              writing code. It wasn't long after that that I declared as an Electrical and Computer Engineering major and
              never looked back.

              <br/><br/>

              Since then, I have worked on many amazing projects for school and work, as well as some DIY projects for 
              myself and some friends and family members. I have experience in many different specialties, from writing
              enterprise applications in various languages and frameworks, to creating IoT solutions that use machine 
              learning for image classification, to building analog circuits for audio synthesis and modulation. 
              Some of my favorite projects include an autonomous, solar powered UAV, music-reactive LED lights, and a 
              device that plays the bassline from the TV show Seinfeld on a speaker when somebody walks in through a 
              door (that one was a request from my brother).

              <br/><br/>

              Over the years, I have found a passion for projects that involve robotics/autonomy as well as music, but 
              at the end of the day, no matter what the application, if I am writing code or working with hardware 
              (or both!), I am happy.



            </p>
            
          </div>
          
          
          
        </Container>

        <Image src={bg2} id='bg2'/>
        <div id="experience-div">
          <h3 id="experience-header">
            My Experience
          </h3>

        </div>
        <div className="experience" style={{"left":"3%","top":"170%"}}>
          <h3 style={{"color":"white"}}>
            ConocoPhillips
          </h3>
        </div>
        {/* <div className="experience" style={{"left":"3%","top":"205%"}}>
          <h3>
            Undergraduate Research
          </h3>
        </div> */}
        {/* <Image src={portrait} style={{"width":"100%"}}/> */}
    </>
    
  );
}

export default About;