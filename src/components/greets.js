export const Greet = (props) => {
  const { name, heroName } = props;

  return (
    <>
      <h1>
        {' '}
        hello {name} the {heroName}
      </h1>

      {props.children}
    </>
  );
};
