import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroText from './Component/HeroText/HeroText.jsx'
import Header from './Component/Header/Header.jsx'

function App() {
  return (
    <>
<body>
    <div className = "pageWrapper">
     <Header title = "Happy Fireplace Palace"/>
      <main>
        <div className ="hero">
            <section className = "discoverHero" >
                <img className="hero1" src="hero-desktop.png" alt="fireplace"/>
                <div className = "discoverTextContainter"> 
                    <p>
                     <h2>Discover the Perfect Fireplace</h2>
                    </p>
                    <p> 
                      <h3>Book consultation: <span className = "white-text">0121 345 6789</span></h3>
                    </p>
                </div>
            </section>
            <div className ="how-it-works-text">
                <p><h2>How it works</h2></p>
                <hr className="solid"/>
            </div>
            <HeroText
                imgSrc = "/how-it-works-1.png"
                title = "Give us a call ..."
                content = 'Call us and book in a "Design Consultation" on a date and time to suit you.'
            />
            <hr/>
            <HeroText
                imgSrc = "/how-it-works-2.png"
                title = "We come to you ..."
                content = 'We come to your home to do an assessment of the space and your style.'
            />
            <hr/>
            <HeroText
            imgSrc = "/how-it-works-3.png"
            title = "We recommend..."
            content = 'We send you a bespoke set of fireplace recommendations.'
            />
        </div>    
        </main>
      <footer>
        <section className = "footer-info">
            <div>
                <p>Find us on:</p>
            </div>
            <ul>
                <li>
                    Facebook
                </li>
                <li>
                    Instagram
                </li>
                <li>
                    Tiktok
                </li>
            </ul>
            <div>
                <p>©️ Fireplace Palace</p>
            </div>
            <div>
                <p>Info@fireplace.co.uk</p>
            </div>
        </section>    
      </footer>
     </div>
         </body>
    </>
  );
}

export default App
