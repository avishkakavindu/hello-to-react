export const Greet = (props) => {
  const { name, heroName } = props;

  return (
    <div>
      <h1>
        {' '}
        hello {name} the {heroName}
      </h1>

      {props.children}
    </div>
  );
};
