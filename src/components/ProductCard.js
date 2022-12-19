import "./ProductCard.css";

const ProductCard = ({ title, img_src, price, rating }) => {
  const arr = new Array(Math.floor(parseInt(rating["rate"]))).fill("*");

  return (
    <div className="product-card">
      {/*<h4>{key}</h4> impossible, cannot access "key", its not a prop.  */}
      <div className="product-image">
        <img alt="no img found" src={img_src} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        {arr.map((item, i) => {
          return (
            <h4 className="fas fa-star" key={i}>
              {" "}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
