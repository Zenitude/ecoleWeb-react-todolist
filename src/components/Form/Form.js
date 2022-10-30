import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './Form.css';

export default function Form({dataList, func}) {

    const [inputState, setInputState] = useState();
    const [errorState, setErrorState] = useState(false);
    
    const dataInput = (e) => {
        setInputState(e)
    }

    const sendAction = (e) => {
        e.preventDefault();
        if(inputState === null || inputState === '' || inputState === undefined)
        {
            setErrorState(true);
        }
        else
        {
            setErrorState(false);
            const newArr = [...dataList, {txt: inputState, id: uuidv4()}]
            func(newArr);
            setInputState('');
        }
    
    }

    return(
        <div className="Form">
            <h1>Todo-List</h1>
            <form onSubmit={e => sendAction(e)} className='containerForm'>
                <div className="containerInput">
                    <label htmlFor="todoList-input">Chose à faire</label>
                    <input onInput={(e) => dataInput(e.target.value)} type="text" id="todoList-input" name="todoList-input" value={inputState}/>
                    {errorState && <p className="msgError">La valeur ne peut être null, indéfinie ou vide</p>}
                </div>
                <button className="btnSend">Envoyer</button>
            </form>
        </div>
    )
}