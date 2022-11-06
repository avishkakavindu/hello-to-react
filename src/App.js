import './App.css';
import { Greet } from './components/greets';

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clerk' heroName='Superman'>
        <p>This is children props</p>
      </Greet>
    </div>
  );
}

export default App;
