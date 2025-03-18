import "./Products.css"
export default function Products() {
  const products = [
    { id: 1, name: "product 1", price: 30,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 2, name: "product 2", price: 40,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 3, name: "product 3", price: 45,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 4, name: "product 4", price: 35,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 5, name: "product 5", price: 50,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 6, name: "product 6", price: 47,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 7, name: "product 7", price: 36,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
    { id: 8, name: "product 8", price: 52,desc:"this is description of the product this is description of the product this is description of the product this is description of the product ",url:"" },
  ];

  return (
    <div>
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h5>{value.desc}</h5>
            <h4>{value.price}</h4>
            <button>Add to cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}
