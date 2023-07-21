
import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY=[{
  id:'p1',
  title:'first Book',
  price:6,
  description:'The first book'
},
{
  id:'p2',
  title:'second Book',
  price:10,
  description:'The second book'
}]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY.map(product=>   <ProductItem
          key={product.id}
          id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)
        }
     
      </ul>
    </section>
  );
};

export default Products;
