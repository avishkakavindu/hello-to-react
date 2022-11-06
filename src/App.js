import './App.css';
import { Greet } from './components/greets';
import { Message } from './components/message';

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
    </div>
  );
}

export default App;
