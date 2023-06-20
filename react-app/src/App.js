import Menu from "./components/menu/menu";
import './App.scss';

function App() {
  const user = {
    firstName: 'Antonio',
    lastName: 'Front-end'
  }

  return (
    <div className="App">
      <Menu user={user} />
    </div>
  );
}

export default App;
