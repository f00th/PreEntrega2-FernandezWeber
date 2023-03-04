import "./ItemListContainer.css";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = (props) => {
    const { id } = useParams(props);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then((res) => this.setItem(res));
    }, [id]);
    
    return (
        <div>
            <p>
                {props.greeting}
            </p>
            <p>Id: {item.id}</p>
        </div>
    );
}

export default ItemListContainer;