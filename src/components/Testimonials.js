import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from 'react-bootstrap/Card';
import Steve from "./HeadShot/Steve.jpeg";
import Jason from "./HeadShot/Jason.jpeg";
import Inti from "./HeadShot/Inti.jpeg";
import Ziad from "./HeadShot/Ziad.jpeg";
import Rajesh from "./HeadShot/Rajesh.jpeg";
import Jim from "./HeadShot/Jim.jpeg";
import Meanakshi from "./HeadShot/Meanashi.jpeg";
import Geoffrey from "./HeadShot/Geoffrey.jpeg";
import Gary from "./HeadShot/Gary.jpeg";




class Testimonials extends React.Component {
        
 

    render() {
          return (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={10}
            >
              <Slider>
                <Slide index={0}> 
                <img src={Jason} alt="Image One" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Jason Craven -  Director Of Architecture at GPS Trackit</h1>
                <Card.Text><p>Shane was a great pleasure to have on the team.</p> 
                <p></p>
                <p>He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well.</p>
                 <p></p>
                 <p>I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.</p>
                <p>I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization.</p>
                <p></p>
             </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={1}> 
                <img src={Steve} alt="Image Two" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Steve Wright VP - Deutsche Bank</h1>
                <Card.Text>
                    <p>In my time working with Shane at Itron, he was very diligent in all aspects of his job.</p>
                     <p></p>
                     <p>Technically strong and was always quick to volunteer for action items outside his job role.</p>
                      <p>He was also very diligent in follow up actions and made sure that there was follow through to completion.</p>
                       <p></p>
                       <p>The team enjoyed working with Shane and came to rely on him for his product knowledge.</p>
                       <p></p>
                       <p>I don't hesitate to recommend him for any technical position.</p>
                       <p></p>
                        </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={2}> 
                <img src={Inti} alt="Image Three" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Inti Sanchez - Test Automation Consultant</h1>
                <Card.Text>I highly recommend Shane he is an excellent coworker and maintains a high standards in delivering results.</Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={3}> 
                <img src={Ziad} alt="Image Four" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Ziad Harb - Senior Test Automation</h1>
                <Card.Text><p>I had the privilege of working with Shane at XM satellite radio.</p>
                <p></p>
                <p>He is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done.</p>
                <p></p>
                <p>He has an exceptional troubleshooting and analytical skill.</p>
                <p></p>
                <p>Shane is a great asset to any company.</p>
                <p></p>
                      </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={4}> 
                <img src={Rajesh} alt="Image Five" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Rajesh Desai - Director Of Quality Assurance</h1>
                <Card.Text><p>I worked with Shane at Itron.</p> 
                <p></p>
                <p>He is a dependable and reliable team player.</p>
                <p></p>
                <p>He always puts the needs of the QA organization first and dedicates 100% of his time to make sure he not only delivers on his assignments but also help others achieve their goals in the process.</p>
                  <p></p>    
                  <p>He possesses excellent programming skills which enable him to create modular, extensible automation frameworks.</p>
                  <p></p>
                  <p>He would be a valuable asset to any QA team.</p>
                  <p></p>
                       </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={5}> 
                <img src={Jim} alt="Image Five" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Jim Hanley - Manager of Systems Architecture</h1>
                <Card.Text><p>Shane is a hard-working, dedicated engineer who uses the latest best practices in software.</p> 
                <p></p>
                <p>He led the system test validation of all meter product lines across both IEC and ANSI.</p>
                 <p></p>
                 <p>Shane assisted in writing a DP for embedded software security with my guidance.</p>
                  <p></p>
                  <p>Shane is highly motivated, a great team player, extremely positive, and I would love to work with Shane again.</p>
                  <p></p>
                  </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={6}> 
                <h1>Kelly Fichman - Software Developer</h1>
                <Card.Text><p>Shane and I were Master's students and worked together on multiple class projects.</p> 
                <p></p>
                <p>He did an exemplary job all around on every part of the work: technical design, actual coding, testing, and deployment.</p>
                 <p></p>
                 <p>He could look at a problem, envision a solution and potential pitfalls, and communicate these things to the rest of the team in a very short amount of time.</p>
                  <p></p>
                  <p>And even though he was more experienced than the rest of us, he brought us up to his level as opposed to talking down to us.</p>
                   <p></p>
                   <p>Shane has been a working developer for as long as I've known him (7+ years).</p>
                   <p></p>
                   <p>He is both very good at development and engineering and an excellent communicator.</p>
                    <p></p>
                    <p>I would recommend him for any type of software position, including project management and program development.</p>
                    <p></p>
                    <p>This guy really does know his stuff, and he's happy to share that knowledge with his team.</p>
                    <p></p>
                </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={7}> 
                <img src={Meanakshi} alt="Image Six" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Meanakshi Sinha - Experienced Quality Assurance Leader</h1>
                <Card.Text><p>I worked with Shane at PeopleNet - Shane was very familiar with the Automation tools and was tasked to work on the Automation set up from scratch at PeopleNet.</p>
                <p></p>
                <p>He is a dedicated, experienced, software professional with a vast experience in all aspects of QA software engineering.</p>
                 <p></p>
                 <p>He is also an excellent team player, with high integrity and work ethics.</p>
                  <p></p>
                  <p>Shane can make great contributions to a company and help build excellent products.</p>
                   <p></p>
                   <p>He is fun to work with!</p>
                   <p></p>
                   </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={8}> 
                <img src={Geoffrey} alt="Image Eight" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Geoffrey Sawyer - End User Support Analyst / Windows System Administrator (Contractor) at WheribleIoT</h1>
                <Card.Text><p>It’s rare that you come across standout talent like Shane’s.</p> 
                <p></p>
                <p>I had the pleasure of working with Shane for two years at GE, collaborating on several product development teams.</p>
                 <p></p>
                 <p>Shane’s ability to juggle multiple projects was unlike any I’ve seen before and made a dramatic difference in the productivity level of our team.</p>
                  <p></p>
                  <p>As a team member or a leader, Shane earns my highest recommendation.</p>
                  <p></p>
                  </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                <Slide index={9}> 
                <img src={Gary} alt="Image Eight" 
                style={{ height: '10%',
                padding: '15px', 
                borderRadius: '20px',
                boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
                width: '200px'}}/>
                <h1>Gary Hall - Embedded Software Engineer Staff at Lockheed Martin</h1>
                <Card.Text><p>Shane is a very knowledgeable Engineer with outstanding communication skills who has a genuine drive to solve any issue or task.</p> 
                <p></p>
                <p>Shane never gives up and always find solutions to the toughest of problems.</p>
                 <p></p>
                 <p>He willingly goes the distance working extra hours and applying methodical effort to achieve milestones on time and ahead of time.</p>
                 <p></p>
                 <p>He is very easy to work with and gets along with everyone, a true team player.</p>
                  <p></p>
                  <p>Shane is a valuable asset to any team in the Engineering world.</p>
                   <p></p>
                   <p>Shane's skill set and strengths in Software and Automation are rock solid and he practices all of the modern standards to ensure the corporation he is working for remains compliant on all ethical and legal levels. I would love to have Shane on my team at Lockheed Martin.</p>
                   <p></p>
                   </Card.Text>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </Slide>
                </Slider>
           
            </CarouselProvider>
          );
        }
      }
  
 export default Testimonials;     


