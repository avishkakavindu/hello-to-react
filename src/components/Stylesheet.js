import './styles.css';
export const Stylesheet = () => {
  const heading = {
    color: 'blue',
  };
  return (
    <div>
      <h1 className='primary'>Styles</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  );
};
