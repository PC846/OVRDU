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
  
    useEffect(() => {
      const yellowTree = images.children[0];
      const goodBook = images.children[1];
      const milkHoney = images.children[2]
    
  
      const headlineFirst = content.children[0].children[0];
      console.log(headlineFirst);
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];
  
      TweenMax.to(header, 0, { css: { visibility: "visible" } });
  
      tl.from(yellowTree, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
        .from(
          yellowTree.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        )
        .from(goodBook, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(
          goodBook.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        )
        .from(milkHoney, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(
          milkHoney.firstElementChild,
          2,
          { scale: 1.6, ease: Power3.easeOut },
          0.2
        );

  
      //Content Animation
      tl.staggerFrom(
        [headlineFirst.children, headlineSecond.children, headlineThird.children],
        1,
        {
          y: 64,
          ease: Power3.easeOut,
          delay: 0.8
        },
        0.15,
        "Start"
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
        .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
    }, []);
    
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
                    "Literature simulates life. <br />
                    A novel is a story of what never was, a play is a novel
                    without narration. <br />
                    A poem is the expression of ideas or feelings a language no
                    one uses, because no one talks in verse." <br />
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
