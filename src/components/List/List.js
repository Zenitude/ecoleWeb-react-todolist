
import './List.css';
import Item from '../Item/Item';

export default function List({dataList, func}) {

    const deleteItem = (id) => {
        const filterItem = dataList.filter(item => {
            return item.id !== id;
        })
        func(filterItem);
    }

    return(
        <div className="List">
            <h2>Liste de choses à faire :</h2>
            <ul className="todolist">
                {dataList != undefined
                && dataList.map(
                    (item) => {
                        return(
                            <Item 
                                txt={item.txt.toString()} 
                                key={item.id}
                                id={item.id}
                                del={deleteItem}
                            />
                        )
                    }
                )}
            </ul>
        </div>
    )
}

