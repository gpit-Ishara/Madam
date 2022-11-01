import logo from './logo.svg';
import './App.css';
import user from './sashika.jpg';
import line from './line.PNG';
import glitz from './logo-new.png';
import ranliya from './ranliya.png';
import cctsss from './cctsss.png';
import icc from './icc.png';
import news from './breaking-news.PNG';
import news1 from './news1.PNG';
import map from './map.jpg';


function App() {
  return (
    <div>
      <div className="App">
        <div>
          <div className='header'>
            <p className='contact'>+94 77 777 9617 / sashika@glitzpark.com</p>
            <div className='search'>
              <i class="fa fa-search" aria-hidden="true"></i>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <div className='main-con'>
            <h4>WELCOME TO MY WORLD</h4>
            <h1>Hi, I'm <span>Sashika de Silva</span></h1>
            <h1><span>a</span> businessman.</h1>
            <div className='social-icon'>
              <a><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div className='user'>
          <img src={user} />
        </div>
      </div>
      <div className='second-con'>
        <div className='second'>
          <div className='age'>
            <div>
              <h1>21
                <span>+</span>
              </h1>
            </div>
            <h2>Years of <br></br> Working <br></br> Experience</h2>
          </div>
          <div className='main-dis'>
            <p><span>21 Years Of Experience</span> In The Private Sector, Gathered Glass-Root Level Experience As A Trainee, 
              And Moved Up On Career Path Up To Senior Management Level In Reputed Companies. Founded Own 
              Company And Now Also Provide Services As Marketing, <span>Management And Consultant.</span></p>
              <div className='main-pos'>
                <div className='pos'>
                  <img src={line} />
                  <div className='pos-main'>
                    <div>
                      <h3>Vice President - <span>Switzerland</span></h3>
                      <div className='swiss'>
                        <p> Chamber of commerce & trade Swiss Ceylon ( Sri Lanka)<br></br> 
                        South- East Asia - Full-time</p>
                        <h5>Feb 2011 - Present · 11 yrs 9 mos</h5>
                      </div>
                    </div>
                    <div className='sec-pos'>
                      <h3>Founder/Director - <span>Sri Lanka</span></h3>
                      <div className='swiss1'>
                        <p>Glitz Park · Full-time</p>
                        <h5>Mar 2002 - Present · 20 yrs 8 mos</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pos1'>
                  <img src={line} />
                  <div className='pos-main'>
                    <div>
                      <h3>Director - <span>Sri Lanka</span></h3>
                      <div className='swiss'>
                        <p>Ranliya Institute (Pvt) Ltd · Full-time</p>
                        <h5>1998 - Present · 24 yrs 10 mos</h5>
                      </div>
                    </div>
                    <div className='sec-pos1'>
                      <h3>Sales Executive - <span>Sri Lanka</span></h3>
                      <div className='swiss1'>
                        <p>International Construction Consortium (Pvt) Ltd · Full-time</p>
                        <h5>2000 - 2002 · 2 yrs</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='third-con'>
        <img src={glitz} />
        <img src={ranliya} />
        <img className='cctsss' src={cctsss} />
        <img className='cctsss' src={icc} />
      </div>
      <div className='forth-con'>
        <h1>Latest News</h1>
        <hr />
        <div className='news'>
          <img src={news} />
          <div>
            <h2>Prince Alwaleed Awards SR 250,000, Including a Bus To Al Khulood Sports Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</p>
              <p>- Feb 25, 2022</p>
              <div className='tags'>
                <div className='tag-back'>
                  <p>#Philantropy</p>
                </div>
                <div className='tag-back'>
                  <p>#Philantropy</p>
                </div>
              </div>
          </div>
        </div>
        <div className='news-more'>
          <div className='news1'>
            <img src={news1} />
            <h2>Prince Alwaleed Awards SR 250,000, Including a Bus To Al Khulood Sports Club</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</p>
              <p>- Feb 25, 2022</p>
              <div className='news-more-tag'>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
              </div>
          </div>
          <div className='news1'>
            <img src={news1} />
            <h2>Prince Alwaleed Awards SR 250,000, Including a Bus To Al Khulood Sports Club</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</p>
              <p>- Feb 25, 2022</p>
              <div className='news-more-tag'>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
              </div>
          </div>
          <div className='news1'>
            <img src={news1} />
            <h2>Prince Alwaleed Awards SR 250,000, Including a Bus To Al Khulood Sports Club</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</p>
              <p>- Feb 25, 2022</p>
              <div className='news-more-tag'>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
                <div className='tag-more'>
                  <p>#Philantropy</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-con'>
          <div>
            <div className='contact-sec'>
              <h1>Contact</h1>
              <div className='demo'>
                <p>Let's Make Something Creative!</p>
                <p>Amazing Design Just For You.</p>
              </div>
            </div>
            <div className='email'>
              <p className='email-tag'>Email:</p>
              <p className='email-id'>sashika@glitzpark.com</p>
            </div>
            <div className='email'>
              <p className='email-tag'>Phone:</p>
              <p className='email-id'>+94 77 777 9617</p>
            </div>
          </div>
          <div className='form'>
            <h2>I Craft Awesome Design Solutions For You. Let's Message Me And Make 
              <span> Something Together!</span>
            </h2>
            <div className='first-input'>
              <div className='name'>
                <label>Your Name (Required)</label>
                <input/>
              </div>
              <div className='name'>
                <label>Your Email (Required)</label>
                <input/>
              </div>
            </div>
            <div className='sec-input'>
              <div className='name'>
                <label>Subject</label>
                <input/>
              </div>
              <div className='name'>
                <label>Phone Number</label>
                <input/>
              </div>
            </div>
            <div className='name' id='last-input'>
              <label>Phone Number</label>
              <input/>
            </div>
            <button className='contact-btn'>Contact Me</button>
          </div>
        </div>
        <p className='copy'>Copyright 2022</p>
      </div>
    </div>
  );
}

export default App;
