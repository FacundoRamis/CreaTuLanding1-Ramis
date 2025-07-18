import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/productos';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoPorId(itemId).then((res) => {
      setItem(res);
    });
  }, [itemId]);

  return (
    <section style={{ padding: '2rem' }}>
      {item ? (
        <>
          <h2>{item.nombre}</h2>
          <img src={item.imagen} alt={item.nombre} width="200" />
          <p>{item.descripcion}</p>
          <p>Precio: ${item.precio}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;
