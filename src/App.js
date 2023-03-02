import logo from './output-onlinepngtools.png';
import logo2 from './op.jpg';
import './App.css';
import lg from './lg.jpeg';
import lf from './lf.png';
import b from './b.png';
import b1 from "./fan.png";
import b2 from "./umpire.png";
import React, { useState } from 'react';
import Typewriter from './TypeWriter';
import ImageCarousel from './ImageCarousel';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Quiz from './Quiz';

const firebaseConfig = {
  apiKey: "AIzaSyAmV6rsioywbqA-upZPjMY6eGculpPLbRw",
  authDomain: "matchswingers.firebaseapp.com",
  databaseURL: "https://matchswingers-default-rtdb.firebaseio.com",
  projectId: "matchswingers",
  storageBucket: "matchswingers.appspot.com",
  messagingSenderId: "449117480534",
  appId: "1:449117480534:web:33e59881be01e21ff9bdf7",
  measurementId: "G-1M3MX610XQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
function App() {
  const [text, setText] = useState('   Welcome to MatchSwingers!!! |');
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");
  let isLoggedIn = false;
  let coins = 50;
  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).catch((error) => {
      setError(error.message);
    });
    isLoggedIn = true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(signupEmail, signupPassword).catch((error) => {
      setError(error.message);
    });
  };
  return (

    <div className="App" id="App">

      <nav>
        <img src={lf} style={{ width: 50 }, { height: 50 }} />
        <a href="#App" className='navbart'><b>MatchSwingers</b></a>
        <a href="#ic" className='navbari'>Watch</a>
        <a href="#dc" className='navbari'>The App</a>
        <a href="#ns" className='navbari'>Values</a>
        <a href="#Log" className='navbari'>Sign In</a>
        <a href="https://maha012002.github.io/Nft-Marketplace/" className='navbari'>Marketplace</a>
        <img src={lf} style={{ width: 50 }, { height: 50 }} />
      </nav>
      {/* <div className='abc'>Welcome to MatchSwingers!!!</div> */}
      <Typewriter text={text} />
      <br></br><br></br>
      <div id='ic'>  <ImageCarousel /></div>

      <br></br><br></br>
      <Quiz />
      <img src={lg} className="im" align="right" alt="logo" />
      <div id="Log" className="Body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup" onSubmit={handleSignup}>
            <form>
              <label htmlFor="chk" aria-hidden="true">Sign Up</label>
              <input type="email" name="email" placeholder="Email" value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)} required="" />
              <input type="password" name="pswd" placeholder="Password" value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)} required="" />
              <button>Sign Up</button>
            </form>
            {!isLoggedIn ? <p>{error}</p> : <p>Successful! Now Log In.</p>}
          </div>

          <div className="login" onSubmit={handleLogin}>
            <form>
              <label htmlFor="chk" aria-hidden="true">Sign In</label>
              <input type="email" name="email" placeholder="Email" value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)} required="" />
              <input type="password" name="pswd" placeholder="Password" value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)} required="" />
              <button>Sign In</button>
            </form>
            {!isLoggedIn ? <p>{error}</p> : <p style={{ color: 'black' }}>Login Successful!</p>}
          </div>
        </div>
      </div>
      <div>
        {isLoggedIn && (
          <div>
            <p>Email: {loginEmail}</p>
            <p>Coins: {coins}</p>
          </div>
        )}
      </div>
      <div className="container" id='dc'>
        <img src={b} className="cd" align="left" alt="logo" />
        <span className="g">MatchSwingers provides a decentralised model for cricket content to be consumed and distributed. It aims to create a more loyal fan base by giving them incentives in the form of NFTs.</span>
      </div>
      <div className="container1">
        <img src={b2} className="cd" align="left" alt="logo" />
        <span className="g">We are Team UpSwingers, a crew of technology enthusiasts with one converging interest: to go forward, for the world.</span>
      </div>
      <div className="container">
        <img src={b1} className="cd1" id='ns' align="bottom" alt="logo" />
        <span className="g1">We also intend to create an alternate revenue stream for ICC by bringing more traffic on the platform by including interactive features(polls, quizzes, giveaways,etc) and partnerships with ICC sponsors which would encourage fans to build a vibrant community on ICC’s platforms.</span>
      </div>
      <section className="section instruction" id="instruction">
        <div className="container">

          <ul className="grid-list">

            <li className="instruction-item">

              <div className="instruction-icon">
                <ion-icon name="wallet-outline"></ion-icon>
              </div>

              <h3 className="instruction-title">Sign Up on MatchSwingers</h3>

              <p className="instruction-text">
                Step into the world of digital currency and start earning coins by signing up with us. With our user-friendly platform, you can easily navigate through the exciting features and engage in real-time conversations with fellow cricket enthusiasts. Get ready to explore the electrifying ICC content on MatchSwingers!
              </p>

            </li>

            <li className="instruction-item">

              <div className="instruction-icon">
                <ion-icon name="grid-outline"></ion-icon>
              </div>

              <h3 className="instruction-title">Interact with the ICC content</h3>

              <p className="instruction-text">
                Take polls and quizzes to earn even more digital coins. And with each interaction, you'll gain a deeper understanding of the sport and its players, enhancing your overall experience on MatchSwingers. The more you interact, the more you earn - it's that simple!
              </p>

            </li>

            <li className="instruction-item">

              <div className="instruction-icon">
                <ion-icon name="file-tray-outline"></ion-icon>
              </div>

              <h3 className="instruction-title">Earn Digital coins with active engagement</h3>

              <p className="instruction-text">
                Store and manage your coins with ease and watch them grow as you use them to unlock amazing ICC rewards! From collectibles to merchandise and match tickets, the possibilities are endless. Earn more coins to get your hands on even more exclusive rewards.
              </p>

            </li>

            <li className="instruction-item">

              <div className="instruction-icon">
                <ion-icon name="bag-handle-outline"></ion-icon>
              </div>

              <h3 className="instruction-title">Trade them for ICC Rewards</h3>

              <p className="instruction-text">
                Don't just stop at earning coins - It's time to cash in your digital coins and redeem your rewards. Head to the Rewards section on the website, select the reward you want, and complete the trade using the digital coins you have earned. What are you waiting for? Start earning and trading today!
              </p>

            </li>

          </ul>
        </div>
      </section>

    </div>
  );
}

export default App;
