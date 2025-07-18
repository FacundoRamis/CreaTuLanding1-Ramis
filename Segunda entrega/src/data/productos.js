const productos = [
  {
    id: "1",
    nombre: "Llavero Naruto",
    precio: 1500,
    categoria: "anime",
    descripcion: "Llavero impreso en PLA estilo Naruto.",
    imagen: "https://pagina.com/150",
  },
  {
    id: "2",
    nombre: "Llavero River Plate",
    precio: 1700,
    categoria: "futbol",
    descripcion: "Llavero escudo River Plate 3D.",
    imagen: "https://pagina.com/150",
  },
  {
    id: "3",
    nombre: "Llavero Pikachu",
    precio: 1800,
    categoria: "anime",
    descripcion: "Llavero de Pikachu con relieve.",
    imagen: "https://pagina.com/150",
  },
];

export const getProductos = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });

export const getProductoPorId = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res(productos.find((p) => p.id === id));
    }, 1000);
  });

export const getProductosPorCategoria = (categoria) =>
  new Promise((res) => {
    setTimeout(() => {
      res(productos.filter((p) => p.categoria === categoria));
    }, 1000);
  });

  
