import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import AttributeList from './components/AttributeList/AttributeList';
import ClassList from './components/ClassList/ClassList';
import AttributeValueDisplay from './components/AttributeValueDisplay';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>React Coding Exercise</h1>
        </header>
        <section className="App-section">
          <AttributeList />
          <ClassList />
          <AttributeValueDisplay />
        </section>
      </div>
    </Provider>
  );
}

export default App;
