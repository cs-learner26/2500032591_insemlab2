
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [result, setResult] = useState('');

  return (
    <div>
      <h2>Feedback Form</h2>

      <label>Name:</label>
      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <label>Rating:</label>
      <select onChange={e => setRating(e.target.value)}>
        <option value="">Select Rating</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <label>Comments:</label>
      <textarea
        placeholder="Comments"
        onChange={e => setComments(e.target.value)}
      />

      <button onClick={() => setResult(
        <div>
          <p>Name: {name}</p>
          <p>Rating: {rating}</p>
          <p>Comments: {comments}</p>
        </div>
      )}>
        Submit
      </button>

      <h3>Your Feedback</h3>
      {result}
    </div>
  );
}

export default App;
