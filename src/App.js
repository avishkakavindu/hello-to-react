import './App.css';
import { Greet } from './components/Greets';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';

function App() {
  return (
    <div className='App'>
      <hr />
      props and children props
      <hr />
      <Greet name='Bruce' heroName='Batman'>
        <button>action</button>
      </Greet>
      <Greet name='Clerk' heroName='Superman'>
        <p>This is children props</p>
      </Greet>
      <hr />
      useStates
      <hr />
      <Message />
      <hr />
      Event handling
      <hr />
      <ClickHandler />
    </div>
  );
}

export default App;
