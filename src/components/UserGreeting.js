export const UserGreeting = () => {
  const isLoggedIn = false;

  return (
    <div>
      <h3>Welcome! {isLoggedIn ? 'Avishka' : 'Guest'}</h3>
    </div>
  );
};
