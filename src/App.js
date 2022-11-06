import './App.css';
import { Greet } from './components/Greets';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import './appStyles.css';
import styles from './appStyles.module.css';
import { Form } from './components/Form';

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
      <hr />
      Parent child communication
      <hr />
      <ParentComponent />
      <hr />
      Conditional Rendering
      <hr />
      <UserGreeting />
      <hr />
      List rendering
      <hr />
      <NameList />
      <hr />
      Styling
      <hr />
      <Stylesheet />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <hr />
      Forms
      <hr />
      <Form />
    </div>
  );
}

export default App;
