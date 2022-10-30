import {useState} from 'react';
import './Item.css';

export default function Item({txt, id, del}) {

    const [check, setCheck] = useState(false);
    const [disabled, setDisabled] = useState(!check);

    const styleLabel = {
        textDecoration: check ? 'line-through' : 'none'
    }

    const styleButton = {
        backgroundColor: check ? 'rgb(255,0,0)' : 'rgb(128,128,128)'
    }

    const checkList = () => {
        setCheck(!check);
        setDisabled(!disabled);
    }

    return(
        <li className="itemList">
            <label htmlFor="checkList" style={styleLabel} onClick={checkList}>{txt}</label>
            <button disabled={disabled} className="btnDel" style={styleButton} onClick={() => del(id)}>Supprimer</button>
        </li>
    )
}