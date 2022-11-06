import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`${childName}: Hello parent`);
  };
  return <ChildComponent greetHandler={greetParent} />;
};
