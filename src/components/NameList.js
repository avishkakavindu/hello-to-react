export const NameList = () => {
  const name = ['Bruce', 'Clerk', 'Diana'];
  return (
    <div>
      <ul>
        {name.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};
