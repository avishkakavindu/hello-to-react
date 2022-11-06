import { useState, setState } from 'react';

export const Message = () => {
  const [message, setMessage] = useState('welcome visitor!');

  return (
    <div>
      <h1> {message} </h1>
      <button onClick={() => setMessage('Thank you for subscribing')}>
        subscribe
      </button>
    </div>
  );
};
