import React, { useState } from "react";
import "./randomquote.css";
import twitter_icon from "../assets/xlogo.png";

const RandomQuote = () => {
  let quotes = [];

  //fetchquote
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  loadQuotes();

  const twitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  const [quote, setQuote] = useState({
    text: "Hi there, click on new quote to load a quote",
    author: "Anjal",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)]; //using math.random to select random quotes
    setQuote(select);
  };
  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <div class="line"></div>
      <p id="author">{quote.author.split(",")[0]}</p>
      <button
        id="new-quote"
        onClick={() => {
          random();
        }}
      >
        New quote
      </button>
      <img
        src={twitter_icon}
        onClick={() => {
          twitterShare();
        }}
        class="tweetlogo"
      ></img>
    </div>
  );
};

export default RandomQuote;
