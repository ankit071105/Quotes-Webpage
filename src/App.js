
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <img src="https://ideogram.ai/assets/progressive-image/balanced/response/nA8qaL1GRsmmC3Nws7CDIg" alt="Quote Image" className="quote-image" />
      <h1>Quotes WebPage</h1>
      <button onClick={fetchQuote}>Get New Quote</button>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <h2>Saved Quotes</h2>
      {savedQuotes.map((q, index) => (
        <QuoteCard key={index} quote={q} onSave={() => {}} />
      ))}
    </div>
  );
};

export default App;
