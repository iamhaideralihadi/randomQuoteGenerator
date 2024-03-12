import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'



function App() {
  //Quote Content
  const [quote, setQuote] = useState("The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.");

  //Quote Author
  const [author, setAuthor] = useState("Steve Jobs");

  // Fetching Random Quote
  function fetchRandomQuote() {
    fetch('https://api.quotable.io/quotes/random?minLength=100&maxLength=120')
      .then(response => response.json())
      .then(data => {
        setAuthor(data[0].author)
        setQuote(data[0].content)
        console.log(data[0].author)
        console.log(data[0].content)
      })
  }

  // Fetching Random Quote on Button Click
  function QuoteBtnClick() {
    fetchRandomQuote();
  }

  function tweetShareBtn(){
    tweettBtn.addEventListener('click', () => {

      console.log("Tweet Button Clicked")
    })
  }

  return (
    <>
    {/*Full Quote Content */}
      <div className="main-body-area">
        {/* Quote Card */}
        <div className="card">
          {/* Quote card Header and Icon */}
          <div className="card-header">
            <svg className='quote-left' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
          </div>
          {/* Main Quote Body */}
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              {/* Quote Content */}
              <p>{quote}</p>
              {/* Quote Author */}
              <div className="blockquote-footer">{author}</div>
            </blockquote>
          </div>

          {/* Quote Btn and Social Media Share */}
          <div className="ButtonsNeworShare newQuotebtn">
            {/* Social Media Share Button */}
            <div className="btnArea-bottom">
              <div className="twitter-btn twitter-color">
                <a href={`https://twitter.com/intent/tweet?text=${quote}`} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary customBtnCss">Tweet</button>
                </a>
              </div>
              <div className="tumblrBtn">
                <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=&content={quote}&canonicalUrl=&shareSource=tumblr_share_button`} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary customBtnCss">Tumblr</button>
                </a>
              </div>
              <div className="FacebookBtn">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=&quote=${quote}`} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary customBtnCss">FaceBook</button>
                </a>
              </div>
            </div>
            {/* New Quote Button */}
            <div className="btnewQuo">
              <button id='newQuote' className="btn btn-dark" onClick={QuoteBtnClick}>New Quote</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



export default App