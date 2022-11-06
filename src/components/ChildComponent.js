export const ChildComponent = (props) => {
  const { greetHandler } = props;

  return (
    <div>
      <button onClick={() => greetHandler('Sammy')}>Greet parent</button>
    </div>
  );
};
