import "./ItemDetailContainer.css";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = (props) => {
    const {id} = useParams(props);
    const [item, setItem] = useState({});

    useEffect(()=> {
        fetch('https://swapi.dev/api/people/${id}').then(res => res.json()).then((res) => this.setItem(res));
    }, [id]);
    
    console.log(item);
    return (
        <div>
            {typeof item.results === 'undefined' ? (
                <div>Cargando</div>
            ) : (
                <div>Listado</div>
            )}
                <p>
                    Name: {item.name}
                </p>
                <p>
                    Id: {id}
                </p>
        </div>
    );
}

export default ItemDetailContainer;