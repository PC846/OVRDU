import React from 'react'
import './CSS/Subscription/Subscription.css'
import reading from './IMAGES/reading.jpg'
import bookPackage from './IMAGES/book-package.jpg'
import pileBooks from './IMAGES/pile-books.jpg'
import donate from './IMAGES/donate.jpg'

const Subscription = () => {
    return (
       
        <div className="subs-wrapper">
            <div className="subs-wrapper-container">
                <div className="subs-content">
                        <div className="subs-content-inner">
                            <div className="black-bar"></div>
                            <span id="services" className="section-two">OUR SERVICES</span>
                            <h1 className="heading-two">
                                <span className="first-text">Browsing books just got easier. </span>
                            </h1>
                            <span className="subs-description">
                                Eliminate the time spent from browsing through book catalogues and endless reviews by using 
                                our service. We send you a random book every month or week for you to enjoy for as long as you'd like.
                                When you're done, just ship it back to us and you can receive another book at your doorstep in a flash.
                                <br />
                                <br />
                                Due to popular demand we now offer specialized book packages based on user recommendation and allow users to
                                pick and choose whatever books they would like for their package for the same deal.
                            
                                <h5 className="check-out"> Check what we have in store </h5>
                            </span>
                            <div className="black-bar-2"></div>
                      
                                <h1 className="heading-three"> We'll take care of your books.</h1>
                                <span className="subs-description-two">
                                    Proper handling is one of the keys to perseving any book. We handle all
                                    books with the upmost care with our state of the art book storage units.
                                    It blocks UV light, and balances the moisture content so no book gets moldy.
                                    <br />
                                    <br />
                                    Several libraries across the country have trusted us to keep even their most
                                    ancient books save and so can you.
                
                                </span>

                                <div className="btn-row">
                                    <button className="about-button">
                                        More about book storage
                                    <div className="line-break"></div>
                                    </button>
                                </div>

                                <div className="black-bar-2"></div>

                                    <h1 className="subs-description-three">Don't throw out your books - we'll take them.</h1>
                                    <span className="sub-description-three-wrapper">
                                        <span className="sub-description-three">
                                            OVRDU will always accept any book, no matter the condition. We use donated books for our book
                                            package services, literacy campaign, and even recycle the most damaged books for our arts program.
                                            Therefore any donated books have free shipping as a thank you for helping America fall in love again
                                            with the written word.
                                            <br />
                                            <br />
                                            No book goes to waste. That is our promise.

                                            <div className="btn-row">
                                                <button className="about-button">
                                                    More about donations
                                                <div className="line-break"></div>
                                                </button>
                                            </div>
                                        </span>
                                    </span>



                                 <div className="sub-images">
                                            <div className="sub-images-inner">
                                            <div className="sub-image reading">
                                                <img src={reading} alt="reading"></img>
                                            </div>
                                            <div className="sub-image bookPackage">
                                                <img src={bookPackage} alt="packge of books"></img>
                                            </div>
                                            <div className="sub-image donate">
                                                <img src={donate} alt="donate poster"></img>
                                            </div>

                                            </div>
                                        </div>
                                        
                            <div className="subscription-wrapper">
                                <div className="subscription-inner">
                                    <div className="subscription-content">
                                        <div id="subscript" className="black-bar-5"></div>
                                        <span className="section-four"> SUBSCRIPTIONS</span>

                                        <h1 className="subscription-heading">Subscribe</h1>
                                            <span className="subscription-description">
                                                We offer competitive prices for every bookworm and have them covered
                                                every week, month, or year based on your subscription. We offer deals on
                                                several of our services based on subscription, loyality, and how you have donated
                                                to our cause. 
                                                <br />
                                                <br />
                                                <span className="fake-btn">Sign up</span> today to find out more.
                                            </span>

                                            
                                    </div>
                                </div>
                            </div>

                </div>
            </div>
        </div>
    </div>
  
    )
}

export default Subscription
