import React, {useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/About/About.css'
import bookStore from './IMAGES/book-store.jpg'
import packageBooks from './IMAGES/package-books.jpg'
import garbageTruck from './IMAGES/garbage-truck.jpg'
import ceo from './IMAGES/ceo.jpg'
import cleaning from './IMAGES/cleaning.jpg'
import {gsap, TimelineLite, Power3} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Carousel} from "react-bootstrap"
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    // GSAP scroll-trigger for first section of the website. I am unsure if I want to work with it so I am keeping it here for now.
    let tl = new TimelineLite({delay:0.3})

    // useEffect(()=> {
    //     gsap.from('.about-content', {
    //         duration:3,
    //         y: '100',
    //         ease:'ease-in',
    //         scrollTrigger: {
    //             trigger:'.heading-one',
    //             start: 'top 90%',
    //             end: 'bottom 60%',
    //             toggleActions: 'restart complete reverse reset'
    //         }
    //     })
    // },[])
    return (
        <div className="about-wrapper">
        <div className="black-bar"></div>
        <span id="about" className="section-one">OUR MISSION</span>
        <div className="about-wrapper-container">
            <div className="about-content">
                    <div className="about-content-inner">
                        <h1 className="heading-one">
                            <span className="first-text">To create the worlds largest </span>
                            <span className="second-text">library right from your home.</span>
                        </h1>

                        <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={garbageTruck}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={packageBooks}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            {/* <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={bookStore}
                                alt="Third slide"
                                />
                            </Carousel.Item> */}
                        </Carousel>

                        <div className="hero-images">
                            <div className="hero-images-inner">
                                <div className="hero-image cleaning">
                                    <img src={cleaning} alt="yellowtree"></img>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="content-wrapper">
                <span className="heading-one-description">
                            
                                It is estimated that <span style={{fontWeight:'bold'}}>640,000</span> tons of books
                                are sent to the landfill annually. That is about
                                <span style={{fontWeight:'bold'}}> 320 million</span> books that are being discarded each year
                                and not being recycled.
                            
                                Here at <span style={{fontWeight:'bold'}}>OVRDU</span> we plan to <span style={{fontWeight:'bold'}}>cut down on book related landfill waste </span>
                                through our subscription service that has book lovers rent books.
                                
                                
                                Love it? <span style={{fontWeight:'bold'}}>Keep</span> the book.
                            
                                Hate it? No worries, <span style={{fontWeight:'bold'}}>we'll take it back</span> so others can use it too.
                                <br  />
                                <br  />
                                <h4> No book is ever overdue</h4>
                                <br  />                       
                                You can always return the book -- <span style={{fontWeight:'bold'}}>whenever, wherever.</span>
                                
                               
                            
                </span>
                <div className="grey-bar"></div>

                <span className="heading-one-description-two">

                    <blockquote>
                        You can often get lost within life; there are so many things buzzing around you
                        that you forget that one small step in the wrong direction can ripple across
                        generations...That is why I created OVRDU -- to take care of those future generations.
                    
                    </blockquote>
                    <br />
                    <div className="cero-images">
                            <div className="cero-images-inner">
                                <div className="cero-image ceo">
                                    <img src={ceo} alt="Stella Coronado"></img>
                                    <cite> 
                                    Jacqueline "Jay" Baccay
                                    
                                    Founder of OVRDU</cite>
                                </div>
                                <div className="btn-row">
                                    <button className="about-button">
                                        More about our mission
                                    <div className="line-break"></div>
                                    </button>
                                </div>
                        </div>
                       
                    </div>
                    

                </span>
                


                            
                </div>
        
        </div>
    )
}

export default About

