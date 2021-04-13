import React, {useRef, useEffect} from 'react'
import './CSS/Header/Header.css'
import {TweenMax, TimelineLite, Power3} from 'gsap'
import yellowTree from './IMAGES/yellow-tree.jpg'
import goodBook from './IMAGES/good-book.jpg'
import milkHoney from './IMAGES/milk-honey.jpg'

const Header = () => {
    let header = useRef(null);
    let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({ delay: 0.8 });
  
    // Use useEffect to renders
    // Typically you would use JQuery to pick out the different elements within the DOM and manipulate them
    // but in React you use useRef and tag whatever elements you want to manipulate.
    // I wanted to manipulate the first section of the webpage so that means the title, the paragraph and the images

    useEffect(() => {
      const yellowTree = images.children[0]; // the images are wrapped in a lot of divs so you need to fish them out by calling on the wraps child (the image)
      const goodBook = images.children[1]; 
      const milkHoney = images.children[2]
    
      // this deals with the h1, paragraph, and button you see first
      // the heading is split up so it has that cool effect you see -- that's why here's a headlineFirst, second, third
      const headlineFirst = content.children[0].children[0];
      console.log(headlineFirst);
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];
      
      TweenMax.to(header, 0, { css: { visibility: "visible" } }); // it is initially set to hidden so it can fade in when the animation ends
  
      tl.from(yellowTree, 1.2, { y: 1280, ease: Power3.easeOut }, "Start") // In GSAP you have "timelines" which work just like regular time lines. 
        .from(                                                             // you have a start(from) and an end (to.) In the "from" section you tell it where to begin
          yellowTree.firstElementChild,                                    // what to do, how long you want it to do it for, etc.
          2,                                                               // the to is just what how you want it to look in the end.
          { scale: 1.6, ease: Power3.easeOut },                            // Here I am telling it to pick the image (firstElementChild) and to scale it up before going back to its
          0.2                                                              // original scaling for that zoom-in effect
        )
        .from(goodBook, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(
          goodBook.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut }, // there are different "eases" that you can use in GSAP. Eases are essentially the animations.
          0.2
        )
        .from(milkHoney, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(
          milkHoney.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        );

  
      // This handles the heading, the paragraph, and the button
      // staggerFrom gives it...well, a stagger. So it comes in one after the other rather than all at once
      tl.staggerFrom(
        [headlineFirst.children, headlineSecond.children, headlineThird.children],
        1,
        {
          y: 64, 
          ease: Power3.easeOut,
          delay: 0.8
        },
        0.15,
        "Start" // the start variable you see is so GSAP knows that this animation and the animations for the pictures are sync. Otherwise it would wait for one to finish and then start the other
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
        .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
    }, []); // always remember the array!
    
    return (
      <div>
        <div class="heading-top-container">
        <h1 className="heading-top">OVRDU</h1>
        </div>
        <ul className="social-list">
          <li><a href="#" className="sign-up">Sign-up</a></li>
          <li><a href="#" className="facebook">Facebook</a></li>
          <li><a href="#" className="twitter">Twitter</a></li>
          <li><a href="#" className="instagram">Instragram</a></li>
        </ul>
        <div id="home" className="hero" ref={(el) => (header = el)}>
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <div className="hero-content-inner" ref={(el) => (content = el)}>
                  <h1>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">Live life on</div>
                    </div>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">the pages</div>
                    </div>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">edge.</div>
                    </div>
                  </h1>
                  <p className="main-quote">
                    Books are made from the plants that our earth provides. Because of
                    it we are able create our own little worlds that are formed from the pages
                    of books. Here are OVRDU we recognize the ties that the environment has with
                    literature and strive to protect it. 
                  </p>
                  <div className="btn-row">
                    <button className="about-button">
                      More about OVRDU
                      <div className="line-break"></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hero-images">
                <div className="hero-images-inner" ref={(el) => (images = el)}>
                  <div className="hero-image yellowTree">
                    <img src={yellowTree} alt="yellowtree"></img>
                  </div>
                  <div className="hero-image goodBook">
                    <img src={goodBook} alt="good book"></img>
                  </div>
                  <div className="hero-image milkHoney">
                    <img src={milkHoney} alt="milk and honey"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Header
