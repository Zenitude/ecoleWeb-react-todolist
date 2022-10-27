import {useState} from 'react';
import './App.css';
import Form from '../components/Form/Form';
import List from '../components/List/List';

function App() {

  const [dataState, setDataState] = useState();

  const sendList = (data) => {
    setDataState(data);
  }
  console.log(dataState);

  return (
    <div className="App">
      <Form func={sendList} />
      <List />
    </div>
  );
}

export default App;
