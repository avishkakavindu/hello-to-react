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
import { FormInput } from './components/FormInput';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    label: 'Username',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'username',
      label: 'Username',
      errorMessage: 'Username should be 3-16 characters',
      pattern: '^[A-Za-z0-9]{3,16}',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      label: 'Email',
      errorMessage: 'It should be a valid email.',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      placeholder: '',
      label: 'Password',
      errorMessage: 'Password should be 8-20 characters.',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'text',
      placeholder: '',
      label: 'Confirm password',
      errorMessage: "Password doesn't match.",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h3> Form with validations</h3>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}

        <button type='submit'>submit</button>
      </form>
      {/* <hr />
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
      <Form /> */}
    </div>
  );
}

export default App;
