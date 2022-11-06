export const ChildComponent = (props) => {
  const { greetHandler } = props;
  return (
    <div>
      <button onClick={greetHandler}>Greet parent</button>
    </div>
  );
};
