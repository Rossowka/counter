import './App.css';
import FunctionTimer from './components/FunctionTimer';
import ClassTimer from './components/ClassTimer';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

function App() {
  return (
    <>
      <div style={styles.container}>
        <FunctionTimer/>
        <ClassTimer/>
      </div>
    </>
  );
}

export default App;
