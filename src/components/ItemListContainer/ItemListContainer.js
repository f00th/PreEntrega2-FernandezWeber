import "./ItemListContainer.css";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = (props) => {
    const {id} = useParams(props);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch('https://swapi.dev/api/people/${id}')
        .then(res => res.json())
        .then((res) => this.setItem(res));
    }, [item]);
    
    return (
        <div>
            <p>
                {props.greeting}
            </p>
        </div>
    );
}

export default ItemListContainer;