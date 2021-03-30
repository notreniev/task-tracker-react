import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const name = 'Everton'
  return (
    <div className='container'>
      <Header title='Welcome' name={name} />
      <Tasks />
    </div>
  );
}

export default App;
