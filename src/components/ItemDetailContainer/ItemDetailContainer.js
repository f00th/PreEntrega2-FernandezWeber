import "./ItemDetailContainer.css";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=> {
        fetch('https://swapi.dev/api/people/${id}')
        .then((res) => res.json())
        .then((res) => setItem(res));
    }, [id]);
    
    console.log(item);
    return (
        <div>
            <p>
                Name: {item.name}
                Id: {id}
            </p>
        </div>
    );
}

export default ItemDetailContainer;