import {useState} from 'react';
import './Form.css';

export default function Form({func}) {

    const [inputState, setInputState] = useState();
    const [errorState, setErrorState] = useState(null);

    const dataInput = (e) => {
        setInputState(e);
    }

    const sendAction = (e) => {
        e.preventDefault();
        if(inputState !== null || inputState !== '' || inputState !== undefined)
        {
            func(inputState)
        }
        else
        {
            setErrorState('La valeur ne peut être null, indéfinie ou vide')
        }
    }

    return(
        <div className="Form">
            <h1>Todo-List</h1>
            <div className='containerForm'>
                <div className="containerInput">
                    <label htmlFor="todoList-input">Chose à faire</label>
                    <input onInput={(e) => dataInput(e.target.value)} type="text" id="todoList-input" name="todoList-input"/>
                    {errorState != null && <p>{errorState}</p>}
                </div>
                <button onClick={sendAction} className="btnSend">Envoyer</button>
            </div>
        </div>
    )
}