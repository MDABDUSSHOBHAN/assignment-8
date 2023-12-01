
import { useEffect, useState } from 'react';
import './product.css'
import Shop from '../shop/Shop';
import Container from '../container/Container';


const Product = () => {
   const [product,setProduct] = useState([]);
   const [cart,setCart] = useState([]);
   useEffect(()=>{
    fetch('product.json')
    .then(response=>response.json())
    .then(data=>setProduct(data))


   },[])
  
   const handleCard =(product)=>{
    console.log("Product Is Add",product);
    const newCart = [...cart,product];
    setCart(newCart);
}

    return (
        <div className='product'>

            <div className='resiz'>
            {
                product.map(products=><Shop
                key={products.id}
                product= {products}
                handleCard={handleCard}
                ></Shop>)
            }
            
            
            </div>
            <div className='sideber'>
            
            <div>
            <div className='continer'>
            <h4 className='t'>Spent Time On Read : 177 min</h4>

        </div>
        
                <Container cart={cart}></Container>
            </div>
            
            
            </div>
          
           

        </div>

        
    );
};

export default Product;