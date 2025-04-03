"use client"

import { useState } from "react"
import "./App.css"
import { ChevronDown } from "./icons/ChevronDown"
import { PlayCircle } from "./icons/PlayCircle"
import { Check } from "./icons/Check"
import { Facebook } from "./icons/Facebook"
import { Twitter } from "./icons/Twitter"
import { Instagram } from "./icons/Instagram"
import { Youtube } from "./icons/Youtube"

function App() {
  const [activeTab, setActiveTab] = useState("bundles")

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/max-logo.svg" alt="Max" />
        </div>
        <div className="nav-actions">
          <button className="language-btn">
            <span className="globe-icon">🌐</span>
            ENGLISH
            <ChevronDown />
          </button>
          <button className="sign-in-btn">SIGN IN</button>
          <button className="sign-up-btn">SIGN UP NOW</button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <img className='background-big' src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0"></img>
          <h1 className="hero-title">Must-see series, movies & more.</h1>
          <p className="hero-subtitle">Choose a Max plan or bundle to start streaming.</p>

          <div className="plans-container">
            {/* Max Only Plan */}
            {/* Bundle Plan */}
            <div className="plan-card">
              <div className="bundle-logos">
                <img src="/disney-plus-logo.svg" alt="Disney+" />
                <img src="/hulu-logo.svg" alt="Hulu" />
                <img src="/max-logo.svg" alt="Max" />
              </div>
              <div className="plan-price">
                <div className="price-label">PLANS START AT</div>
                <div className="price">
                  <span className="dollar">$</span>
                  <span className="amount">16.99</span>
                  <span className="period">/MONTH</span>
                </div>
              </div>
              <button className="plan-cta">GET THE BUNDLE</button>
            </div>
          </div>

          {/* Legal Text */}
          <div className="legal-text">
            <p>
              U.S. only. Must be 18+. Available only for direct-billed purchases via Disney+, Hulu, and Max. Access
              content from each service separately. Content, feature and device compatibility vary by service. For
              details, including info on billing and cancellation, visit the <a href="#">Help/Help Center</a>. Use of
              Disney+, Hulu, and Max are subject to their respective terms and conditions, see each of:{" "}
              <a href="#">Disney+ Subscriber Agreement</a>, <a href="#">Hulu Subscriber Agreement</a>, and
              <a href="#"> Max Terms of Use</a>. ©2023 Disney and its related entities. Max ©2023 Home Box Office, Inc.
            </p>
            <p>
              By signing up for this bundle, Max will share your email address & subscription details with Disney+ and
              Hulu for eligibility, marketing, and other purposes. For more info about your choices, see the{" "}
              <a href="#">Privacy Center</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Plan Selection Section */}
      <div className="plan-selection">
        <h2 className="section-title">Find Your Perfect Plan</h2>

        <div className="tabs">
          <button className={`tab ${activeTab === "bundles" ? "active" : ""}`} onClick={() => setActiveTab("bundles")}>
            MAX BUNDLES
          </button>
          <button className={`tab ${activeTab === "plans" ? "active" : ""}`} onClick={() => setActiveTab("plans")}>
            MAX PLANS
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "bundles" && (
            <div className="bundle-options">
              {/* With Ads Bundle */}
              <div className="bundle-card">
                <div className="bundle-logos">
                  <img src="/disney-plus-logo.svg" alt="Disney+" />
                  <img src="/hulu-logo.svg" alt="Hulu" />
                  <img src="/max-logo.svg" alt="Max" />
                </div>
                <h3 className="bundle-title">With Ads</h3>
                <p className="bundle-description">Max Basic With Ads, Disney+ Basic, and Hulu (With Ads)</p>
                <button className="bundle-cta">SELECT BUNDLE</button>
              </div>

              {/* No Ads Bundle */}
              <div className="bundle-card">
                <div className="bundle-logos">
                  <img src="/disney-plus-logo.svg" alt="Disney+" />
                  <img src="/hulu-logo.svg" alt="Hulu" />
                  <img src="/max-logo.svg" alt="Max" />
                </div>
                <h3 className="bundle-title">No Ads</h3>
                <p className="bundle-description">Max Standard, Disney+ Premium, and Hulu (No Ads)</p>
                <button className="bundle-cta">SELECT BUNDLE</button>
              </div>
            </div>
          )}

          {activeTab === "plans" && (
            <div className="plans-grid">
              <div className="plan-option">
                <h3 className="plan-option-title">Max With Ads</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">9.99</span>
                  <span className="period">/mo</span>
                </div>
                <button className="plan-option-cta">SELECT PLAN</button>
                <ul className="plan-features">
                  <li>
                    <Check /> Stream on 2 devices at once
                  </li>
                  <li>
                    <Check /> Full HD 1080p
                  </li>
                  <li>
                    <Check /> 30+ channels of live TV
                  </li>
                  <li>
                    <Check /> No offline downloads
                  </li>
                </ul>
              </div>

              <div className="plan-option featured">
                <div className="popular-tag">MOST POPULAR</div>
                <h3 className="plan-option-title">Max Ad-Free</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">15.99</span>
                  <span className="period">/mo</span>
                </div>
                <button className="plan-option-cta">SELECT PLAN</button>
                <ul className="plan-features">
                  <li>
                    <Check /> Stream on 2 devices at once
                  </li>
                  <li>
                    <Check /> Full HD 1080p
                  </li>
                  <li>
                    <Check /> 30+ channels of live TV
                  </li>
                  <li>
                    <Check /> 30 offline downloads
                  </li>
                </ul>
              </div>

              <div className="plan-option">
                <h3 className="plan-option-title">Max Ultimate Ad-Free</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">19.99</span>
                  <span className="period">/mo</span>
                </div>
                <button className="plan-option-cta">SELECT PLAN</button>
                <ul className="plan-features">
                  <li>
                    <Check /> Stream on 4 devices at once
                  </li>
                  <li>
                    <Check /> 4K UHD with Dolby Atmos
                  </li>
                  <li>
                    <Check /> 30+ channels of live TV
                  </li>
                  <li>
                    <Check /> 100 offline downloads
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="featured-content">
        <h2 className="section-title">Stream What's Trending</h2>
        <div className="content-grid">
          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Featured Content" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">House of the Dragon</h3>
            <p className="content-description">
              The reign of House Targaryen begins with this prequel to the popular HBO series.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Featured Content" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">The Last of Us</h3>
            <p className="content-description">
              After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Featured Content" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">Succession</h3>
            <p className="content-description">
              Follow the Roy family as they contemplate their future once their aging father begins to step back from
              the media conglomerate.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Featured Content" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">The White Lotus</h3>
            <p className="content-description">
              Follow the exploits of various guests and employees at an exclusive tropical resort over the span of a
              week.
            </p>
          </div>
        </div>
      </div>

      {/* See What's New Section */}
      <div className="whats-new-section">
        <h2 className="section-title">See What's New</h2>
        <div className="whats-new-grid">
          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="The White Lotus" />
            <div className="whats-new-title">THE WHITE LOTUS</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="PITT" />
            <div className="whats-new-title">PITT</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="PAUL IN AFRICA" />
            <div className="whats-new-title">PAUL IN AFRICA</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="UNCHARTED CANYONS" />
            <div className="whats-new-title">UNCHARTED CANYONS</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="LAST WEEK TONIGHT" />
            <div className="whats-new-title">LAST WEEK TONIGHT</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="CELTICS CITY" />
            <div className="whats-new-title">CELTICS CITY</div>
          </div>
        </div>
      </div>

      {/* Live Sports Section */}
      <div className="live-sports-section">
        <div className="live-sports-header">
          <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Live Sports" className="live-sports-bg" />
          <div className="live-sports-content">
            <h2 className="live-sports-title">Live Sports</h2>
            <p className="live-sports-description">
              Stream the NBA, NHL, MLB™, U.S. Soccer, NASCAR, Unrivaled, college football, and premier cycling events
              live.
            </p>
            <p className="live-sports-note">
              Live Sports included only on Standard and Premium plans with select games and blackouts. *TM 2023 MLB
            </p>
          </div>
        </div>

        <div className="sports-categories">
          <div className="sports-category">
            <img src="/sports-nba.jpg" alt="NBA" />
            <span>NBA</span>
          </div>

          <div className="sports-category">
            <img src="/sports-nhl.jpg" alt="NHL" />
            <span>NHL</span>
          </div>

          <div className="sports-category">
            <img src="/sports-mlb.jpg" alt="MLB" />
            <span>MLB™</span>
          </div>

          <div className="sports-category">
            <img src="/sports-soccer.jpg" alt="U.S. Soccer" />
            <span>U.S. Soccer</span>
          </div>

          <div className="sports-category">
            <img src="/sports-nascar.jpg" alt="NASCAR" />
            <span>NASCAR</span>
          </div>

          <div className="sports-category">
            <img src="/sports-unrivaled.jpg" alt="Unrivaled" />
            <span>Unrivaled</span>
          </div>

          <div className="sports-category">
            <img src="/sports-college.jpg" alt="College Football" />
            <span>College Football</span>
          </div>

          <div className="sports-category">
            <img src="/sports-cycling.jpg" alt="Cycling" />
            <span>Cycling</span>
          </div>
        </div>
      </div>

      {/* Home Shows Section */}
      <div className="home-shows-section">
        <div className="home-shows-header">
          <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Fixer Upper" className="home-shows-bg" />
          <div className="home-shows-content">
            <div className="home-shows-logo">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Fixer Upper" />
            </div>
            <h3 className="home-shows-subtitle">Favorite</h3>
            <h2 className="home-shows-title">Home Shows</h2>
          </div>
        </div>

        <div className="home-shows-grid">
          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Property Brothers" />
            <div className="home-show-title">PROPERTY BROTHERS</div>
          </div>

          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Maine Cabin Masters" />
            <div className="home-show-title">MAINE CABIN MASTERS</div>
          </div>

          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Hometown" />
            <div className="home-show-title">HOMETOWN</div>
          </div>

          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Bargain Block" />
            <div className="home-show-title">BARGAIN BLOCK</div>
          </div>

          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Good Bones" />
            <div className="home-show-title">GOOD BONES</div>
          </div>

          <div className="home-show-card">
            <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="House Hunters" />
            <div className="home-show-title">HOUSE HUNTERS</div>
          </div>
        </div>
      </div>

      {/* Devices Section */}
      <div className="devices-section">
        <h2 className="section-title">Watch Anywhere</h2>
        <p className="section-subtitle">
          Stream on your favorite devices, including Smart TVs, phones, tablets, and more.
        </p>

        <div className="devices-grid">
          <div className="device-card">
            <img src="/device-tv.png" alt="TV" />
            <h3>Smart TVs</h3>
            <p>Samsung, LG, Sony, and more</p>
          </div>

          <div className="device-card">
            <img src="/device-mobile.png" alt="Mobile" />
            <h3>Mobile Devices</h3>
            <p>iOS and Android</p>
          </div>

          <div className="device-card">
            <img src="/device-laptop.png" alt="Laptop" />
            <h3>Computers</h3>
            <p>Chrome, Safari, Edge, Firefox</p>
          </div>

          <div className="device-card">
            <img src="/device-game.png" alt="Game Console" />
            <h3>Game Consoles</h3>
            <p>PlayStation, Xbox</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">
              <h3>What is Max?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Max is the streaming platform that brings together all of HBO with even more movies, series, and Max
                Originals for the whole family, including Friends, South Park, the DC Universe, the Wizarding World of
                Harry Potter, and more.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>How much does Max cost?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Max offers several plans starting at $9.99/month (with ads) or $15.99/month (ad-free). You can also
                bundle Max with Disney+ and Hulu starting at $16.99/month.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>Can I watch live sports on Max?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Yes, Max offers live sports including NBA, NHL, MLB, and soccer through the B/R Sports Add-On, which is
                included at no additional cost for a limited time.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>How do I cancel my subscription?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                You can cancel your Max subscription at any time through your account settings. Your subscription will
                remain active until the end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to start streaming?</h2>
        <p>Sign up now and start watching today.</p>
        <button className="cta-button">SIGN UP NOW</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/max-logo.svg" alt="Max" />
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Originals</a>
                </li>
                <li>
                  <a href="#">Just Added</a>
                </li>
                <li>
                  <a href="#">Last Chance</a>
                </li>
                <li>
                  <a href="#">Coming Soon</a>
                </li>
                <li>
                  <a href="#">Trending Now</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Genres</h4>
              <ul>
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Comedy</a>
                </li>
                <li>
                  <a href="#">Crime</a>
                </li>
                <li>
                  <a href="#">Documentaries</a>
                </li>
                <li>
                  <a href="#">Drama</a>
                </li>
                <li>
                  <a href="#">Fantasy & Sci-Fi</a>
                </li>
                <li>
                  <a href="#">Horror</a>
                </li>
                <li>
                  <a href="#">International</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Manage Account</a>
                </li>
                <li>
                  <a href="#">Parental Controls</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Supported Devices</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.</p>
            <div className="app-stores">
              <a href="#">
                <img src="/app-store.png" alt="App Store" />
              </a>
              <a href="#">
                <img src="/google-play.png" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

