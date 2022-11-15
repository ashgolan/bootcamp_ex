import "./Product.css";
function Product(props) {
  console.log(props);
  const myProduct = props.data.find((product) => {
    return product.title === props.productSelected;
  });
  return (
    <div className="product__card">
      <h3>{myProduct.title}</h3>
      <h4>{myProduct.size}</h4>
      <img src={myProduct.imageUrl}></img>
      <h5>{myProduct.price}</h5>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.setProductSelected(null);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Product;
