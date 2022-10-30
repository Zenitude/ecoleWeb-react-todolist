import {useState} from 'react';
import './App.css';
import Form from '../components/Form/Form';
import List from '../components/List/List';

function App() {

  const [dataArr, setDataArr] = useState([]);

  const updateList = (data) => {
    setDataArr(data);
  }

  return (
    <div className="App">
      <Form dataList={dataArr} func={updateList}/>
      <List dataList={dataArr} func={updateList} />
    </div>
  );
}

export default App;
