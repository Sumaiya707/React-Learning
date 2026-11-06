export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div>
      <h2>Produc t List</h2>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price} Taka</p>
          </div>
        );
      })}
    </div>
  );
};
