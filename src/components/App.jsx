import { Feedback } from './Feedback/Feedback';

// import Counter from './Counter/Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
      {/* {<Counter initialValue={35} />} */}
    </div>
  );
};
