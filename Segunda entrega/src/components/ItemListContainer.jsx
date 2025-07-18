import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data/productos';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = categoriaId
        ? await getProductosPorCategoria(categoriaId)
        : await getProductos();

      setProductos(data);
    };

    fetchData();
  }, [categoriaId]);

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>¡Bienvenido a la tienda de Dunno Impresiones!</h2>
      <div style={styles.grid}>
        {productos.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.imagen} alt={item.nombre} style={styles.image} />
            <h3>{item.nombre}</h3>
            <p style={styles.price}>Precio: ${item.precio}</p>
            <Link to={`/item/${item.id}`} style={styles.button}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fefaf5',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    maxHeight: '180px',
    objectFit: 'contain',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '0.5rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#ff9f1c',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  }
};

export default ItemListContainer;
